import { defineTable } from 'convex/server'
import { v } from 'convex/values'

export const todosTable = defineTable({
  title: v.string(),
  isCompleted: v.boolean(),
})
