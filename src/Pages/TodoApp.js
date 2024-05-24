import React, {useState} from 'react'
import TodoForm from '../Components/TodoForm/TodoForm'
import TodoItemList from '../Components/TodoItemList/TodoItemList'
import TodoModel from '../models/TodoModel'

const TodoApp = () => {
    const [todos, setTodo] = useState([])
    const [nextId, setNextId] = useState(0)
    const handleAddTodo = (newTodo) => {
        const newTodoItem = new TodoModel(nextId, newTodo)
        setTodo([...todos, newTodoItem])
        setNextId(nextId + 1)
    }

    const handleDelete = (id) => {
        setTodo(todos.filter((todo, index)  => index !== id))
    }

    const handleComplete = (item) => {
        setTodo(todos.map(todo => 
            todo.id === item.id ? { ...todo, completed : !todo.completed} : todo
        ))
    }

    return (
        <>
            <TodoForm addTodo = {handleAddTodo}/>
            <TodoItemList tasks={todos} onDelete = {handleDelete} onComplete={handleComplete}/>
        </>
    )
}

export default TodoApp