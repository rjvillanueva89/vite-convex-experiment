import { query } from '../_generated/server'

export const getTodos = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('todos').collect()
  },
})
