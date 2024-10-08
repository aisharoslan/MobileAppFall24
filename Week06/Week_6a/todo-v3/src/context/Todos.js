import axios from 'axios'
import { createContext, useState, useCallback } from 'react'

const TodoContext = createContext() // creates a TodoContext component

function Provider({children}) {
    // const [count, setCount] = useState(5)

    // const incrementCount = () => {
    //     setCount(count + 1)
    // }

    // const valueToShare = {
    //     count, // same as count: count
    //     incrementCount // same as incrementCount = () => { setCount(count + 1) }
    // }
    const [todos, setTodos] = useState([])

    // much more common, wrap the function in useCallback inline!
    // useCallback memoizes fetchTodos one copy in memory and we always reference the same slot in computer's memory so it SHOULD never update
    // unless there is something in the dependency array
    const fetchTodos = useCallback(async () => {
      const response = await axios.get('http://localhost:3001/todos')
      setTodos(response.data)
    }, [])

    // not usually done in production but probably more clear
    // memoization - always point to the same fetchtodos
    // memoize UNLESS we put smth in the array - then we change
    // const stableFetchTodos = useCallback(fetchTodos, []) - then export 

    const createTodo = async (title) => {
        const response = await axios.post('http://localhost:3001/todos', {title})
        // always make a copy and add the new at the end
        const updatedTodos = [...todos, response.data]
        // always set with the copy so react knows to compare 2 different slots in its memory
        setTodos(updatedTodos)
    }
    
    const editTodoById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/todos/${id}`, {
          title: newTitle,
        })
    
        const updatedTodos = todos.map((todo) => {
          if (todo.id === id) {
            return {...todo, ...response.data}
          }
          return todo
        })
        setTodos(updatedTodos)
    }
    
    const deleteTodoById = async (id) => {
        await axios.delete(`http://localhost:3001/todos/${id}`)
    
        const updatedTodos = todos.filter((todo) => {
          // return truthy keeps, falsey removes!
          return todo.id !== id
        })
    
        setTodos(updatedTodos)
    }

    const contextValues = {
        todos,
        fetchTodos,
        createTodo,
        editTodoById,
        deleteTodoById,
    }

    return (
        // <TodoContext.Provider value={valueToShare}>
        //     {children}
        // </TodoContext.Provider>
        <TodoContext.Provider value={contextValues}>
            {/* App is the children */}
            {children} 
        </TodoContext.Provider>
    )
}

// named exports
export { Provider }
export default TodoContext

// import both in the same file
// import TodoContext, {Provider} from './....'