import useTodoContext from '../hooks/use-todo-context'
import TodoItem from './TodoItem'

const TodoList = () => {
  const {todos} = useTodoContext()
  // const {count, incrementCount} = useContext(TodoContext) // pass in like prop
  const renderedTodos = todos.map((todo) => (
    // <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
    <TodoItem key={todo.id} todo={todo} />
  ))
  return (
    <div>
      {/* <div>
        {count}
        <button onClick={incrementCount}>Click!</button>
      </div> */}
      {renderedTodos}
    </div>
  )
}

export default TodoList
