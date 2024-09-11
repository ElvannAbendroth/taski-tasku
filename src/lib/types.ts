export type Task = {
  id: string
  text: string
  done: boolean
  clerkId: string
}

export type NewTask = Omit<Task, 'id' | 'done' | 'clerkId'>
