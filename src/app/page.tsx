import { TaskGrid } from '@/components/TaskGrid'
import { auth } from '@clerk/nextjs/server'

export default async function Home() {
  const { userId } = auth()
  const data = await fetch(`http://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/api/tasks/`)
  if (!data?.ok) throw new Error('Error while fetching user from UserDataContext')
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
