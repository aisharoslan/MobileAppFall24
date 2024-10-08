/* first just show them
const TodoItem = (props) => {
  const {todo} = props
  return <div>{todo.title}</div>
}
*/

// delete the item, need an X, and to define deleteTodoById in APP!
/*const TodoItem = (props) => {
  const {todo, onDelete} = props

  // we cannot call the function directly onClick, we need the ID,
  // So we need to wrap it in a handleCLick functions
  const handleClick = () => {
    onDelete(todo.id)
  }
  return (
    <div>
      {todo.title} <button onClick={handleClick}>X</button>
    </div>
  )
}*/

// EDIT: Now this component needs to show either the TITLE or the EDIT FORM
// content changing = STATE here too!
import {useState} from 'react'
import TodoEdit from './TodoEdit'
const TodoItem = (props) => {
  const {todo, onDelete, onEdit} = props
  const [showEdit, setShowEdit] = useState(false)

  // NEW we need two different click handlers so we will change this to handleDelete
  const handleDelete = () => {
    onDelete(todo.id)
  }

  // NEW edit handler, THIS JUST HIDES AND SHOWS
  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  // LAST: combine edit and close forms into one submit prop/handler
  // remove ONEDIT
  const handleSubmit = (id, newTitle) => {
    // CHANGE TO ONEDIT PROP NOT HANDLEEDIT ANYMIRE
    onEdit(id, newTitle)
    setShowEdit(false)
  }
  // NEW Conditional content
  let content = <h3>{todo.title}</h3>
  /* FIRST PASS WITH ONEDIT
  if (showEdit) {
    // would be nice to have the existing todo pre-populate the form right?
    // lets make TodoEdit component do that!
    content = <TodoEdit todo={todo} onEdit={onEdit} />
  }
    */
  // LAST
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return (
    <div className='ml-4 flex flex-row items-start w-48'>
      {/* NEW CONDITIONAL RENDER */}
      <h3 className='text-left'>{content}</h3>
      <div className='flex flex-row justify-items-end mb-4'>
        <button className='p-2 ml-24 bg-amber-500 rounded text-white' onClick={handleEdit}>Edit</button>
        <button className='ml-2 p-2 bg-rose-500 rounded text-white' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
