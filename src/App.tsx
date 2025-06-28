import { TodoForm } from '@/components/todos/form'
import { TodosList } from '@/components/todos/list'

function App() {
  return (
    <div className="min-h-dvh w-dvw flex items-center justify-center">
      <div className="flex flex-col gap-4 w-full max-w-md">
        <h1>Convex Experiment</h1>
        <TodoForm />
        <TodosList />
      </div>
    </div>
  )
}

export default App
