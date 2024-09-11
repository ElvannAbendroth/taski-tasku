'use client'

import { FC, useState } from 'react'
import { Button } from './ui/button'
import { useTasks } from '@/hooks/useTask'
import { Input } from './ui/input'

interface NewTaskFormProps {}

export const NewTaskForm: FC<NewTaskFormProps> = () => {
  const { addTask } = useTasks()
  const [newTask, setNewTask] = useState<{ text: string }>({ text: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ text: e.target.value })
  }

  const handleSave = () => {
    if (newTask.text.trim()) {
      addTask(newTask)
      setNewTask({ text: '' })
    }
  }

  return (
    <div className="flex flex-col p-6 bg-gray-100 rounded-2xl aspect-square text-sm gap-4 wrap relative">
      <Input
        type="text"
        className="bg-transparent text-foreground h-full focus-visible:"
        value={newTask.text}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <Button onClick={handleSave} size={'xs'} className="absolute bottom-0 right-0 m-3">
        Save
      </Button>
    </div>
  )
}
