import { useState } from 'react'

const tasks = [
  { id: 1, text: 'Something to do', done: false },
  { id: 2, text: 'Another little task', done: true },
  { id: 3, text: 'Do it in style', done: false },
  { id: 4, text: 'DO THIS NOW', done: false },
  { id: 5, text: 'for later', done: true },
  { id: 6, text: 'Do me ;)', done: true },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold">Tasks</h1>
      <div className="grid sm:grid-cols-3 gap-6">
        {tasks.map(task => {
          return (
            <div className="flex flex-col p-6 bg-purple-300 rounded-2xl aspect-square text-sm gap-4" key={task.id}>
              <div
                className={`size-4 border-foreground border rounded-full ${
                  task.done ? 'bg-foreground' : ' bg-transparent'
                }`}
              ></div>
              <p>{task.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
