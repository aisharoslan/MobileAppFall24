import useTodoContext from '../hooks/use-todo-context'
import TodoItem from './TodoItem'

const TodoList = () => {
  const {todos} = useTodoContext()
  const renderedTodos = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ))
  return (
    <div className="flex flex-col mt-4">
      {renderedTodos}
    </div>
  )
}

export default TodoList
