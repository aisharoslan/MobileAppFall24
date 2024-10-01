import { useState } from 'react'

const TodoCreate = (props) => {
    const { onCreate } = props
    const [ title, setTitle ] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        // make sure the form doesn't refresh the page
        event.preventDefault()
        onCreate(title)
        setTitle('') // clear out form
    }

    // need to bind form elements to something in state
    return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            {/* ensures todo actually shows up - updates form field whenever the input changes (whenever the user types a letter) */}
            {/* updates whole form field by using that value todo which is being set every time you type a letter - calls handleChange */}
            <input type="text" onChange={handleChange} value={title}/>
        
            {/* autosubmit in a form */}
            <button>Add Todo</button>
        </form>
    )
}

export default TodoCreate