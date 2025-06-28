import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@convex/api'
import { useMutation } from 'convex/react'
import { PlusIcon } from 'lucide-react'
import { useState } from 'react'

export const TodoForm = () => {
  const [title, setTitle] = useState('')
  const createTodo = useMutation(api.services.todos.createTodo)

  const handleClick = () => {
    createTodo({ title })
    setTitle('')
  }

  return (
    <div className="flex gap-2">
      <Input
        placeholder="Add a todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="button" onClick={handleClick}>
        <PlusIcon />
      </Button>
    </div>
  )
}
