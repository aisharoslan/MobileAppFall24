import { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

const App = () => {
    // hold todos
    const [ todos, setTodos ] = useState([])

    const createTodo = (title) => {
        console.log('create todo: ', title)
        // NEVER DIRECTLY MUTATE STATE, USE THE SETTER - WE NEED TO RE-RENDER bc it's a diff state from original - if not, it can't detect - make a copy and add to it - never do todos.push(object)
        // we need to make a new copy of our to-do array, and then add our new todo object at the end
        // this extra copy storage is fine
        // can spread todos after the new object if want the new one to show up top
        const updatedTodos = [
            ...todos,
            // when the key and value are identical, you can just say the key once, same as title: title if the same name for key and values
            { id: Math.round(Math.random() * 999999999), title},
        ]
        setTodos(updatedTodos)
    }

    const deleteTodoById = (id) => {
        // look at the array, find the matching id and remove it!
        // .filter returns a new copy, filter takes an arrow function - return something truthy/falsey, if truthy we keep item, if falsey, we chuck it out, pass in an individual todo
        // filter returns a copy of the array you are filtering through
        const updatedTodos = todos.filter((todo) => {
            // return truthy (if exists) keep , falsey chuck
            return todo.id !== id
        })
        setTodos(updatedTodos)
    }   

    const editTodoById = (id, newTitle) => {
        // we use map when we want to edit, we use filter when we wanna delete
        const updatedTodos = todos. map((todo) => {
            // if the IDs match, this is the one to update
            if (todo.id === id) {
                // copy old values of individual todo (id), then add new values
                return {...todo, title: newTitle}
            }
            // otherwise return the untouched todo
            return todo
        })

        // set our state here and pass it all the way back down...
        setTodos(updatedTodos)
    }

    return (
        <div>
            { todos.length }
            {/* // going to create a Todo */}
            <TodoCreate onCreate={createTodo} />
            
            {/* pass down our todos array into TodoList */}
            <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
        </div>
    )
}

export default App