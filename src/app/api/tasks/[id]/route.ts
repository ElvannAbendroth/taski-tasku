import { NextResponse } from 'next/server'

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
