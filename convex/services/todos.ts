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

export const updateTodo = mutation({
  args: {
    id: v.id('todos'),
    data: v.object({
      title: v.optional(v.string()),
      isCompleted: v.optional(v.boolean()),
    }),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, args.data)
  },
})
