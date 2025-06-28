import { defineTable } from 'convex/server'
import { v } from 'convex/values'

export const usersTable = defineTable({
  name: v.string(),
  email: v.string(),
  age: v.number(),
})
