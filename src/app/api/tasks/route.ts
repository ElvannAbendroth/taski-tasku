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
