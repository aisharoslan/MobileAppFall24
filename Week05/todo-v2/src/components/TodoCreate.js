import {useState} from 'react'

const TodoCreate = (props) => {
  // 2) pass in onCreate prop
  const { onCreate, category } = props
  // 3) create state for input
  const [title, setTitle] = useState('')
  // 4) add event handler for onChange
  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  // 7) add onSubmit handler and pass in onCreate prop
  // don't forget we need to interrupt default form submission behavior!
  const handleSubmit = (event) => {
    event.preventDefault()
    onCreate(title)
    // 9) we want to clear out the form after its submitted
    // use our state setter
    setTitle('')
  }

  // 1) needs a label, input, and submit button!
  // we need to bind our input element which means this
  // component also needs state!
  return (
    <div>
      {/* // 8) pass handleSubmit to form */}
      <form onSubmit={handleSubmit}>
        <label className='ml-4 font-bold'>{category}</label>
        {/* 5) wire it up to state and handler */}
        <div>
          <input className='mt-2 ml-4 outline rounded outline-2 outline-sky-500 w-6/12' type="text" onChange={handleChange} value={title} />
          {/* 6) clicking button or hitting enter key will trigger form submit */}
          <button className='ml-2 bg-sky-500 p-1 w-4/12 text-white rounded'>Add Todo</button>
        </div>
      </form>
    </div>
  )
}

export default TodoCreate
