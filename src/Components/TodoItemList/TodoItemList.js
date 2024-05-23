import React from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import TodoItem from '../TodoItem/TodoItem'
import Row from 'react-bootstrap/Row'


const TodoItemList = ({tasks, onDelete}) => {
    return (
        <Container>
            <Row><h2>Todo List</h2></Row>
            { tasks.length < 1 ? 
                <Row><h5>No items added</h5></Row> : 
                <Row>
                    <ListGroup className="mb-2">
                        {tasks.map((task, index) => (
                            <ListGroup.Item key={index}><TodoItem item={task} index={index} onDelete={onDelete}/></ListGroup.Item>
                        ))}
                    </ListGroup>
                </Row>
            }
        </Container>
    )
}

export default TodoItemList