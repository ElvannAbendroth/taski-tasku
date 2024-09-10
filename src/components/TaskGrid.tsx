'use client'
import { Task } from '@/app/page'
import { FC, useEffect, useState } from 'react'
import { Button } from './ui/button'

interface TaskGridProps {
  data: Task[]
}

export const TaskGrid: FC<TaskGridProps> = ({ data }) => {
  const [tasks, setTasks] = useState(data)

  useEffect(() => {}, [setTasks])

  const markDone = (id: string) => {
    const updatedTasks = tasks.map(task => (task.id === id ? { ...task, done: !task.done } : task))
    setTasks(updatedTasks)
  }

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }
  return (
    <>
      {tasks.map((task: any) => {
        return (
          <div
            className="flex flex-col p-6 bg-purple-300 rounded-2xl aspect-square text-sm gap-4 wrap relative"
            key={task.id}
          >
            <div className="flex flex-wrap gap-2 items-center">
              <button
                onClick={() => markDone(task.id)}
                className={`size-4 border-foreground border rounded-full ${
                  task.done ? 'bg-foreground' : ' bg-transparent'
                }`}
              ></button>
              <p>{task.text}</p>
              <Button onClick={() => deleteTask(task.id)} size={'xs'} className="absolute bottom-0 right-0  m-3">
                delete
              </Button>
            </div>
          </div>
        )
      })}
    </>
  )
}
