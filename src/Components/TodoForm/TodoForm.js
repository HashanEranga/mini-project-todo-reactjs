import React, {useState} from "react";
import {Container, Form, Button, ListGroup} from "react-bootstrap"
import TodoItem from "../TodoItem/TodoItem";

const TodoForm = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleTodoChange = (event) => {
        setTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim()){
            setTasks([...tasks, task])
            setTask('')
        }
    }

    const handleDelete = (id) => {
        console.log("removed id "+id)
        let removeTask = tasks[id]
        console.log("removing item " + removeTask)
        setTasks(tasks.filter((task, index)  => index != id))
    }

    return (
        <Container>
            <h1 className="mt-5">Todo List Form</h1>

            <Form onSubmit={handleSubmit} className="mb-3">
                <Form.Group controlId="todoFormTask">
                    <Form.Label>Task</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter task"
                        value={task}
                        onChange={handleTodoChange}
                    />
                </Form.Group>
                <Button variant="primary" className="mt-2" type="submit">Add Task</Button>
            </Form>

            <h1>Todo List</h1>
            <ListGroup className="mb-5">
                {tasks.map((task, index) => (
                    <ListGroup.Item key={index}><TodoItem item={task} index={index} onDelete={handleDelete}/></ListGroup.Item>
                ))}
            </ListGroup>

        </Container>
    )
}

export default TodoForm;