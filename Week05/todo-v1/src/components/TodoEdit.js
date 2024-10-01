import { useState } from 'react'

const TodoEdit = (props) => {
    const { todo, onSubmit } = props
    const [ title, setTitle ] = useState( todo.title )

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('new title is: ', title)
        // hide the edit form once we submit
        // onSubmit needs to hide the edit form, and update the todo
        onSubmit(todo.id, title)
        // setShowEdit(false)
        // onSubmit()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title: </label>
            <input onChange={handleChange} value={title}/>
            <button>Update</button>
        </form>
    )
}

export default TodoEdit