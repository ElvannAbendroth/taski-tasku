import startDb from '@/lib/db'
import { NextResponse } from 'next/server'
import Task from '@/models/taskModel'

export const dynamic = 'force-static'

export const GET = async () => {
  try {
    await startDb()
    const links = await Task.find({})
    return NextResponse.json(links)
  } catch (error) {
    return NextResponse.json({ message: `${error}` })
  }
}
