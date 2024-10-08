import {useEffect} from 'react'
import useTodoContext from './hooks/use-todo-context'

import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

const App = () => {
  // const [todos, setTodos] = useState([])

  // const fetchTodos = async () => {
  //   const response = await axios.get('http://localhost:3001/todos')
  //   setTodos(response.data)
  // }
  //   useEffect(() => {}) - no second argument: fires every time the component (re)renders
  //   useEffect(() => {}, []) - []: fires the first time the component renders
  //   useEffect(() => {}, [counter]) fire on first render and every time the variable counter changes
  
  // believe it or not, fetchTodos is the only itemxw we need from context in App
  const { fetchTodos } = useTodoContext()
  
  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <div>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App
