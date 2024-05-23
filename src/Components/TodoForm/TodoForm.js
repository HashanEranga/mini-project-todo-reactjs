import React, {useState} from "react";
import {Container, Form, Button} from "react-bootstrap"

const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState('');

    const handleTodoChange = (event) => {
        setTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim()){
            addTodo(task)
            setTask('')
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit} className="mb-3 mt-5">
                <Form.Group controlId="todoFormTask">
                    <Form.Label><h2>Add Task</h2></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter task"
                        value={task}
                        onChange={handleTodoChange}
                    />
                </Form.Group>
                <Button variant="primary" className="mt-2" type="submit">Add Task</Button>
            </Form>
        </Container>
    )
}

export default TodoForm;