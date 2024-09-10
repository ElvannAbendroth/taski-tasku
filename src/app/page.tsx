import { TaskGrid } from '@/components/TaskGrid'
import { auth } from '@clerk/nextjs/server'

export type Task = {
  id: string
  text: string
  done: boolean
}

export default async function Home() {
  const { userId } = auth()
  const data = await fetch('http://localhost:3000/api/tasks')
  const tasks = await data.json()

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold">Tasks</h1>
      <div id="task-grid" className="grid sm:grid-cols-3 gap-6">
        {userId && <TaskGrid data={tasks} />}
        {!userId && <div>Login to see tasks</div>}
      </div>
    </div>
  )
}
