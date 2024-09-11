'use client'

import { FC } from 'react'

import { Button } from './ui/button'
import { useTasks } from '@/hooks/useTask'

interface TaskGridProps {}

export const TaskGrid: FC<TaskGridProps> = () => {
  const { tasks, loading, markDone, deleteTask } = useTasks()

  if (loading) {
    return <div>Loading tasks...</div>
  }

  return (
    <>
      {tasks.map(task => (
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
            <Button onClick={() => deleteTask(task.id)} size={'xs'} className="absolute bottom-0 right-0 m-3">
              delete
            </Button>
          </div>
        </div>
      ))}
    </>
  )
}
