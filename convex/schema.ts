import { defineSchema } from 'convex/server'
import { todosTable } from './tables/todos'
import { usersTable } from './tables/users'

export default defineSchema({
  todos: todosTable,
  users: usersTable,
})
