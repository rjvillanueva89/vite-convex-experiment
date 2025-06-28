import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PlusIcon } from 'lucide-react'

export const TodoForm = () => {
  return (
    <div className="flex gap-2">
      <Input placeholder="Add a todo..." />
      <Button type="button">
        <PlusIcon />
      </Button>
    </div>
  )
}
