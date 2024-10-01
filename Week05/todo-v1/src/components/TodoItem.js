import { useState } from 'react'
import TodoEdit from './TodoEdit'

// JSON server to save state permanently, refactor with context, so no need to pass props from parent to bottom

// could also pass in {todo} instead of props
const TodoItem = (props) => {
    const { todo, onDelete, onEdit } = props
    const [ showEdit, setShowEdit ] = useState(false)

    const handleDelete = () => {
        onDelete(todo.id)
    }

    const handleShowEdit = () => {
        // for now, just hide show edit component
        setShowEdit(!showEdit)
    }


    const handleSubmit = (id, newTitle) => {
        onEdit(id, newTitle) // calls onEdit function
        handleShowEdit() // hides edit form
    }

    // content will change, so use let
    let content = <h3>{todo.title}</h3>
    if (showEdit) {
        content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
    }

    return (
        <div>
            { content }
            <button onClick={handleShowEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default TodoItem