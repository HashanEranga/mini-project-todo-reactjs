import React, {useState} from 'react'
import TodoForm from '../Components/TodoForm/TodoForm'
import TodoItemList from '../Components/TodoItemList/TodoItemList'
import TodoModel from '../models/TodoModel'

const TodoApp = () => {
    const [todos, setTodo] = useState([])
    const [nextId, setNextId] = useState(0)
    const [order, setOrder] = useState(false)

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

    const handleOrderChange = () => {
        if(order) setTodo(todos.slice().sort((a, b) => a.id - b.id))
        else setTodo(todos.slice().sort((a, b) => b.id - a.id))
        setOrder(!order)
    }

    return (
        <>
            <TodoForm 
                addTodo = {handleAddTodo}
            />

            <TodoItemList 
                tasks={todos} 
                onDelete = {handleDelete} 
                onComplete={handleComplete} 
                toggleOrderChange={handleOrderChange} 
                currentOrder={order}
            />
        </>
    )
}

export default TodoApp