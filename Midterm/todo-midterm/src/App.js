import {useEffect} from 'react'
import useTodoContext from './hooks/use-todo-context'

import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

const App = () => {
  const { fetchTodos } = useTodoContext()
  
  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <>
    <div className="p-4 m-4 bg-gray-300 drop-shadow-md hover-drop-shadow-xl rounded-md flex flex-row justify-center items-center">
      <h1 className="font-medium text-2xl">DevTracker</h1>
    </div>
    <div className="flex flex-col w-full h-auto">
      <div className="project-card">
        <h2 className='font-medium text-2xl py-2 pb-4'>Project X</h2>
        <TodoCreate />
        <TodoList />
      </div>
    </div>
    </>
  )
}

export default App
