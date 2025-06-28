import { cn } from '@/lib/utils'
import { api } from '@convex/api'
import type { Doc } from '@convex/dataModel'
import { useMutation, useQuery } from 'convex/react'
import { SquareCheckIcon, SquareIcon } from 'lucide-react'

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
  const updateTodo = useMutation(api.services.todos.updateTodo)

  const handleClick = () =>
    updateTodo({ id: todo._id, data: { isCompleted: !todo.isCompleted } })

  return (
    <li
      key={todo._id}
      onClick={handleClick}
      className="py-2 cursor-pointer flex gap-2 items-center"
    >
      {todo.isCompleted ? (
        <SquareCheckIcon className="size-4" />
      ) : (
        <SquareIcon className="size-4" />
      )}
      <span className={cn(todo.isCompleted && 'line-through')}>
        {todo.title}
      </span>
    </li>
  )
}
