import { auth } from '@clerk/nextjs/server'

const tasks = [
  { id: 1, text: 'Something to do', done: false },
  { id: 2, text: 'Another little task', done: true },
  { id: 3, text: 'Do it in style', done: false },
  { id: 4, text: 'DO THIS NOW', done: false },
  { id: 5, text: 'for later', done: true },
  { id: 6, text: 'Do me ;)', done: true },
]

export default function Home() {
  const { userId } = auth()

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold">Tasks</h1>
      <div className="grid sm:grid-cols-3 gap-6">
        {userId &&
          tasks.map(task => {
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
