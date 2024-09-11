import { useState, useEffect } from 'react'
import { NewTask, Task } from '@/lib/types'

export async function getAll() {
  const res = await fetch(`/api/tasks/`)
  if (!res?.ok) throw new Error('Error while fetching user from UserDataContext')
  const tasks = await res.json()

  return tasks
}

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchTasks = async () => {
    try {
      setIsLoading(true)
      const res = await fetch(`/api/tasks/`)
      const data = await res.json()
      setTasks(data) // Update state with new tasks
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching tasks:', error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [setTasks])

  const markDone = (id: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, done: !task.done } : task)))
  }

  const deleteTask = async (id: string) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        fetchTasks() // Refetch tasks after successfully deleting a task
      } else {
        const errorData = await res.json()
        console.error('Error deleting task:', errorData.error)
      }
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }
  const addTask = async (newTask: NewTask) => {
    try {
      const res = await fetch(`/api/tasks/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      })

      if (res.ok) {
        const createdTask = await res.json()
        const newTaskList = [...tasks, createdTask]
        console.log(newTaskList)
        setTasks(newTaskList) // Update state directly after task is added
      } else {
        const errorData = await res.json()
        console.error('Error adding task:', errorData.error)
      }
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  console.log(tasks)

  return { tasks, isLoading, markDone, deleteTask, addTask }
}
