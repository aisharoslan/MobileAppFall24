import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'
import { FaCheck } from "react-icons/fa6";
import { GrUndo } from "react-icons/gr";

const TodoEdit = (props) => {
  const {todo, onSubmit} = props
  const [title, setTitle] = useState(todo.title)
  const [poc, setPoc] = useState(todo.poc)
  const {editTodoById} = useTodoContext()

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangePoc = (event) => {
    setPoc(event.target.value)
  }

  const handleClick = (event) => {
    setTitle(todo.title)
    setPoc(todo.poc)
    onSubmit()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    editTodoById(todo.id, title, poc)
    onSubmit()
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row justify-between mb-4 space-x-2">
        <div className="flex flex-row justify-between space-x-2">
          <input
            type="text"
            placeholder={poc}
            onChange={handleChangePoc}
            value={poc}
            className="border-stone-300 border-[2px] rounded p-2 w-2/12 text-center"
          />
          <input
            type="text"
            onChange={handleChangeTitle}
            value={title}
            className='border-stone-300 border-[2px] rounded self-center p-2 w-10/12'
          />
        </div>
        <div className="flex flex-row justify-between space-x-2">
          <button type="button" className="py-2 px-3 bg-amber-300 rounded" onClick={handleClick}><GrUndo /></button>
          <button type="submit" className="py-2 px-3 bg-green-400 rounded"><FaCheck /></button>
        </div>
      </div>
    </form>
  )
}

export default TodoEdit
