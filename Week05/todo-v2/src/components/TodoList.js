import { useContext } from 'react'
import TodoContext from '../context/Todos'

import TodoItem from './TodoItem'

const TodoList = (props) => {
  const {todos, onDelete, onEdit} = props

  const message = useContext(TodoContext)

  // the list component is only responsible for mapping and passing props
  // we can use the todo.id for the key!
  const renderedTodos = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
  ))
  return (
    <div>
      <h1>{message}</h1>
      {renderedTodos}
    </div>
  )
}

export default TodoList
