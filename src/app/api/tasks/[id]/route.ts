import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import startDb from '@/lib/db'
import Task from '@/models/taskModel'

// Mock data: the list of tasks
const tasks = [
  { id: 1, text: 'Something to do', done: false },
  { id: 2, text: 'Another little task', done: true },
  { id: 3, text: 'Do it in style', done: false },
  { id: 4, text: 'DO THIS NOW', done: false },
  { id: 5, text: 'for later', done: true },
  { id: 6, text: 'Do me ;)', done: true },
]

// Handle GET requests for a specific task
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  // Convert id to a number and find the corresponding task
  const task = tasks.find(t => t.id === Number(id))

  // If task is not found, return a 404 response
  if (!task) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 })
  }

  // If task is found, return it as a JSON response
  return NextResponse.json(task)
}

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    // Verify authentication
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Please Login!' }, { status: 401 })
    }

    // Connect to the database
    await startDb()

    // Find the task by id and delete it
    const deletedTask = await Task.findOneAndDelete({ _id: params.id, clerkId: userId })

    if (!deletedTask) {
      return NextResponse.json({ error: 'Task not found or not authorized to delete' }, { status: 404 })
    }

    // Return success response
    return NextResponse.json({ message: 'Task deleted successfully', taskId: params.id }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: `Failed to delete task: ${error}` }, { status: 500 })
  }
}
