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
      <div className="grid sm:grid-cols-3 gap-6">
        {userId &&
          tasks.map((task: any) => {
            return (
              <div
                className="flex flex-col p-6 bg-purple-300 rounded-2xl aspect-square text-sm gap-4 wrap"
                key={task.id}
              >
                <div className="flex flex-wrap gap-2 items-center">
                  <div
                    className={`size-4 border-foreground border rounded-full ${
                      task.done ? 'bg-foreground' : ' bg-transparent'
                    }`}
                  ></div>
                  <p>{task.text}</p>
                </div>
              </div>
            )
          })}
        {!userId && <div>Login to see tasks</div>}
      </div>
    </div>
  )
}
