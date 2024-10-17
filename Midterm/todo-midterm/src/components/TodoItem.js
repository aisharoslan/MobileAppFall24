import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'
import TodoEdit from './TodoEdit'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import cx from 'classnames'

const TodoItem = (props) => {
  const {todo} = props
  const [showEdit, setShowEdit] = useState(false)
  const {deleteTodoById} = useTodoContext()

  const handleDelete = () => {
    deleteTodoById(todo.id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }

  let content = (
    <>
      <div className={cx(
        'p-1.5 px-2 rounded border-[2px]',
        {
          'border-violet-300 bg-violet-100': todo.category === 'frontend',
          'border-blue-300 bg-blue-100': todo.category === 'backend',
          'border-fuchsia-300 bg-fuchsia-100': todo.category === 'design',
          'border-green-400 bg-green-200': todo.category === 'td',
          'border-rose-300 bg-rose-100': todo.category === 'doc',
        }
      )}>
       {todo.poc}
      </div>
      <div className={cx(
        'rounded flex-grow p-1 self-center py-2',
        {
          'border-violet-300 bg-violet-300': todo.category === 'frontend',
          'border-blue-300 bg-blue-300': todo.category === 'backend',
          'border-fuchsia-300 bg-fuchsia-300': todo.category === 'design',
          'border-green-400 bg-green-400': todo.category === 'td',
          'border-rose-300 bg-rose-300': todo.category === 'doc',
        }
      )}>
        <h2 className="ml-2">{todo.title}</h2>
      </div>
      <div className="flex flex-row justify-between space-x-2">
        <button onClick={handleEdit} className="py-2 px-3 bg-amber-300 rounded"><FiEdit /></button>
        <button onClick={handleDelete} className="py-2 px-3 bg-rose-500 rounded"><RiDeleteBin6Line /></button>
      </div>
    </>
  )
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return (
    <div className="flex flex-row justify-between mb-4 space-x-2">
      <div className="ml-2 self-center flex flex-row justify-between space-x-2 flex-grow">
        {content}
      </div>
    </div>
  )
}

export default TodoItem
