import { cn } from '@/lib/utils'
import { api } from '@convex/api'
import type { Doc } from '@convex/dataModel'
import { useMutation, useQuery } from 'convex/react'
import { SquareCheckIcon, SquareIcon, TrashIcon } from 'lucide-react'
import { useState } from 'react'

type Todo = Doc<'todos'>

export const TodosList = () => {
  const todos = useQuery(api.services.todos.getTodos)

  if (!todos) return <div>Loading...</div>

  return (
    <ul className="divide-y divide-dashed">
      {todos?.map((todo) => <TodoItem key={todo._id} todo={todo} />)}
    </ul>
  )
}

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [isLoading, setIsLoading] = useState(false)
  const updateTodo = useMutation(api.services.todos.updateTodo)
  const deleteTodo = useMutation(api.services.todos.deleteTodo)

  const handleToggle = async () => {
    setIsLoading(true)
    await updateTodo({ id: todo._id, data: { isCompleted: !todo.isCompleted } })
    setIsLoading(false)
  }

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation()

    setIsLoading(true)
    await deleteTodo({ id: todo._id })
    setIsLoading(false)
  }

  return (
    <li
      key={todo._id}
      onClick={handleToggle}
      className={cn(
        'py-2 cursor-pointer flex gap-2 items-center',
        isLoading && 'opacity-50 pointer-events-none cursor-not-allowed'
      )}
    >
      {todo.isCompleted ? (
        <SquareCheckIcon className="size-4" />
      ) : (
        <SquareIcon className="size-4" />
      )}
      <span className={cn('flex-1', todo.isCompleted && 'line-through')}>
        {todo.title}
      </span>
      <button type="button" onClick={handleDelete} className="cursor-pointer">
        <TrashIcon className="size-4" />
      </button>
    </li>
  )
}
