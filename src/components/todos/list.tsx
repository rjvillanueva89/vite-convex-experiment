import { api } from '@convex/api'
import type { Doc } from '@convex/dataModel'
import { useQuery } from 'convex/react'
import { SquareIcon } from 'lucide-react'

type Todo = Doc<'todos'>

export const TodosList = () => {
  const todos = useQuery(api.services.todos.getTodos)
  return (
    <ul className="divide-y divide-dashed">
      {todos?.map((todo) => <TodoItem key={todo._id} todo={todo} />)}
    </ul>
  )
}

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <li key={todo._id} className="py-2 flex gap-2 items-center">
      <SquareIcon className="size-4" /> {todo.title}
    </li>
  )
}
