import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'

export const getTodos = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('todos').collect()
  },
})

export const createTodo = mutation({
  args: {
    title: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('todos', {
      title: args.title,
      isCompleted: false,
    })
  },
})
