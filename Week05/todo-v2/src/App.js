import { useState, useEffect } from 'react'
// import todocreate after handler
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import axios from 'axios'
import './globals.css'
import './index.css'

const App = () => {
  // all children components need access to this list or part of it.
  // app is the closest common parent to them all!
  const [todos, setTodos] = useState([])

  // to get entire db everytime, not just the one we created
  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3001/todos')
    setTodos(response.data)
  }

  // fetchTodos() - infinite loop - we only wanna fire once - so useEffect, if [] - only fire once when component first mounts, if nothing, it'll refire everytime App re-renders like fetchTodos() on its own, if [todos] - check for changes in todos and execute the code
  // useEffect(() => {}) - no second argument: fires every time theh component (re)renders
  // useEffect(() => {}, []) - []: fires the first time the component renders
  // // useEffect(() => {}), [counter] - fire on first render and every time the variable counter changes

  useEffect(() => {
    fetchTodos()
  }, [])


  // event handler to pass to TodoCreate
  // need to take the title from TodoCreate
  const createTodo = async (title) => {
    const response = await axios.post('http://localhost:3001/todos', {title})
    // always make a copy and add the new at the end
    const updatedTodos = [
      ...todos,
      response.data
    ]
    // always set with the copy so React knows to compare 2 different slots in its memory
    setTodos(updatedTodos)
    // // AFTER createtodo is finished, update state here!
    // // thisb is our first time updating an array, slightly more complex!
    // /*NEVER EVER
    // todos.push({id: 1, title: title})
    //  setTodos(todos) */
    // // when array or object needs updating in state,
    // // we need to be very careful to do it the react way
    // // create a new array,
    // // copy all existing elements in that array
    // // add in new item at the end!
    // const updatedTodos = [
    //   ...todos,
    //   // key and value match for title, so we can condense it like this
    //   //{id: 123, title: title}
    //   // NEW: Unique IDS
    //   // math.random, with math.round
    //   {id: Math.round(Math.random() * 9999999), title},
    // ]
    // setTodos(updatedTodos)
  }

  // const deleteTodoById = (id) => {
  //   // go tthrough array, find the one with the matching ID and delete it!
  //   // array.filter does not mutate the array, it returns an updated one that only contains the
  //   // elements that passed our truthy test!
  //   // const updatedTodos = todos.filter(() => {})

  //   const updatedTodos = todos.filter((todo) => {
  //     // return truthy keeps, falsey removes!
  //     return todo.id !== id
  //   })

  //   setTodos(updatedTodos)
  // }

  // LAST EDIT need the ID of the todo being edited AND the new title from the form!
  const editTodoById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      title: newTitle,
    })
    
    console.log(response.data)
    // response will return newly returned todo
    const updatedTodos = todos.map((todo) => {
      // we only care about updating the one that matches the ID
      if (todo.id === id) {
        // we copy the old values, then overwrite the title
        return {...todo, ...response.data}
      }
      // otherwise return the unaltered todo
      return todo
    })

    setTodos(updatedTodos)

    // const updatedTodos = todos.map((todo) => {
    //   // we only care about updating the one that matches the ID
    //   if (todo.id === id) {
    //     // we copy the old values, then overwrite the title
    //     return {...todo, title: newTitle}
    //   }
    //   // otherwise return the unaltered todo
    //   return todo
    // })
    // // set our state, NOW WE NEED TO PASS IT ALL THE WAY DOWN
    // setTodos(updatedTodos)
  }

  const deleteTodoById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/todos/${id}`)
    const updatedTodos = todos.filter((todo) => {
      // return truthy keeps, falsey removes!
      return todo.id !== id
    })

    setTodos(updatedTodos)
    
  }

  const category = ['Studying', 'Cooking', 'Gardening', 'Professional']
  return (
    <div className='mt-16 flex flex-col items-center justify-items-center'>
      <div className='todo-card flex flex-col justify-items-start items-start w-8/12'>
        <TodoCreate onCreate={createTodo} category={category[0]}/>
        {/* Now that we have state, pass it to the list to map! */}
        {/* DELETE function added, pass it down */}
        <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
      </div>
      <div className='todo-card flex flex-col justify-items-start items-start w-8/12'>
        <TodoCreate onCreate={createTodo} category={category[1]}/>
        {/* Now that we have state, pass it to the list to map! */}
        {/* DELETE function added, pass it down */}
        <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
      </div>
      <div className='todo-card flex flex-col justify-items-start items-start w-8/12'>
        <TodoCreate onCreate={createTodo} category={category[2]}/>
        {/* Now that we have state, pass it to the list to map! */}
        {/* DELETE function added, pass it down */}
        <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
      </div>
      <div className='todo-card flex flex-col justify-items-start items-start w-8/12'>
        <TodoCreate onCreate={createTodo} category={category[3]}/>
        {/* Now that we have state, pass it to the list to map! */}
        {/* DELETE function added, pass it down */}
        <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
      </div>
    </div>
  )
}

export default App
