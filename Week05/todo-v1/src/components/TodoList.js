import TodoItem from './TodoItem'

const TodoList = (props) => {
    const { todos, onDelete, onEdit } = props

    // use parentheses instead of {} if wanna return everything in it
    const renderedContent = todos.map((todo) => ( 
        // pass onDelete to TodoItem
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
    ))
    return <div>{renderedContent}</div>
}

export default TodoList