import { auth } from '@clerk/nextjs/server'
import startDb from '@/lib/db'
import { NextResponse } from 'next/server'
import Task from '@/models/taskModel'

export const GET = async () => {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Please Login!' }, { status: 401 })
    }

    await startDb()
    const userTasks = await Task.find({ clerkId: userId })
    return NextResponse.json(userTasks)
  } catch (error) {
    return NextResponse.json({ message: `${error}` })
  }
}

export const POST = async (req: Request) => {
  try {
    //Verify Authentication
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Please Login!' }, { status: 401 })
    }

    // Parse & Validation
    const { text } = await req.json()
    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'Task text is required' }, { status: 400 })
    }

    //DB Query
    await startDb()
    const newTask = new Task({
      text,
      done: false,
      clerkId: userId,
    })
    await newTask.save()

    // Return the saved task in the response
    return NextResponse.json(newTask, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: `Error creating task: ${error}` }, { status: 500 })
  }
}
