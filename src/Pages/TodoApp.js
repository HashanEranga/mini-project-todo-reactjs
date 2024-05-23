import React, {useState} from 'react'
import TodoForm from '../Components/TodoForm/TodoForm'
import TodoItemList from '../Components/TodoItemList/TodoItemList'

const TodoApp = () => {
    const [todos, setTodo] = useState([])
    const handleAddTodo = (newTodo) => {
        setTodo([...todos, newTodo])
    }

    const handleDelete = (id) => {
        setTodo(todos.filter((todo, index)  => index !== id))
    }

    return (
        <>
            <TodoForm addTodo = {handleAddTodo}/>
            <TodoItemList tasks={todos} onDelete = {handleDelete}/>
        </>
    )
}

export default TodoApp