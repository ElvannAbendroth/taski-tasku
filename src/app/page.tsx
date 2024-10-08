import { NewTaskForm } from '@/components/NewTaskForm'
import { TaskGrid } from '@/components/TaskGrid'

import { auth } from '@clerk/nextjs/server'

export default async function Home() {
  const { userId } = auth()

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold">Tasks</h1>
      <div id="task-grid" className="grid sm:grid-cols-3 gap-6">
        {userId && (
          <>
            <NewTaskForm />
            <TaskGrid />
          </>
        )}
        {!userId && <div>Login to see tasks</div>}
      </div>
    </div>
  )
}
