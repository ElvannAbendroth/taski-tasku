import { Task as TaskDocument } from '@/lib/types'
import { models, model, Schema } from 'mongoose'

interface Methods {}

const taskSchema = new Schema<TaskDocument, Methods>({
  text: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  clerkId: {
    type: String,
    required: true,
  },
})

taskSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Task = models.Task || model('Task', taskSchema)

export default Task
