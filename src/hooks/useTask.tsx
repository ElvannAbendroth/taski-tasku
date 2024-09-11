import { useState, useEffect } from 'react'
import { Task } from '@/lib/types'

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`/api/tasks/`)
        const data = (await res.json()) as Task[]
        setTasks(data) // Set tasks after successful fetch
        setLoading(false)
      } catch (error) {
        console.error('Error fetching tasks:', error)
        setLoading(false)
      }
    }
    fetchTasks()
  }, [])

  const markDone = (id: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, done: !task.done } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return { tasks, loading, markDone, deleteTask }
}
