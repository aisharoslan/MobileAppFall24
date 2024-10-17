import {useState} from 'react'
import Dropdown from './Dropdown'
import useTodoContext from '../hooks/use-todo-context'

const TodoCreate = () => {
  // Dropdown Settings
  const OPTIONS = [
    {label: 'Frontend', value: 'frontend'},
    {label: 'Backend', value: 'backend'},
    {label: 'Design', value: 'design'},
    {label: 'Testing & Deployment', value: 'td'},
    {label: 'Documentation', value: 'doc'},
  ]

  const {createTodo} = useTodoContext()
  const [title, setTitle] = useState('')
  const [poc, setPoc] = useState('')
  const [value, setValue] = useState(null)

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangePoc = (event) => {
    setPoc(event.target.value)
  }
  
  const handleChangeOption = (option) => {
    setValue(option)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createTodo(title, poc, value.value)
    setTitle('')
    setPoc('')
    setValue(null)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-between items-center">
        <input type="text" placeholder="Todo Title" onChange={handleChangeTitle} value={title} className="border-[1.5px] border-indigo-400 rounded w-full text-center p-2"/>
        <div className="flex flex-row justify-between items-center mt-2 space-x-1">
          <input type="text" placeholder="POC" onChange={handleChangePoc} value={poc} className="p-2 border-[1.5px] border-sky-500 rounded text-center w-2/12"/>
          <Dropdown options={OPTIONS} value={value} onChange={handleChangeOption} />
          <button className="p-2 px-6 bg-blue-400 border-blue-400 rounded text-white">Add Todo</button>
        </div>
      </div>
    </form>
  )
}

export default TodoCreate
