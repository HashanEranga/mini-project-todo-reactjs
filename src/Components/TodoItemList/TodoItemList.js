import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import TodoItem from '../TodoItem/TodoItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const TodoItemList = ({tasks, onDelete, onComplete, toggleOrderChange, currentOrder}) => {
    const [filter, setFilter] = useState(0)

    const toggleOrder = () => {
        toggleOrderChange()
    }

    const toggleShowState = (state) => {
        setFilter(state)
    }

    const getFilteredTasks = () => {
        if(filter === 0) return tasks;
        else if(filter === 1) return tasks.filter(task => task.completed)
        else return tasks.filter(task => !task.completed)
    }

    const filteredTasks = getFilteredTasks()

    return (
        <Container>
            <Row><h2>Todo List</h2></Row>
            { filteredTasks.length < 1 ? 
                <Row><h5>No items added</h5></Row> : 
                <Row>
                    <ListGroup className="mb-2">
                        {filteredTasks.map((task, index) => (
                            <ListGroup.Item key={index}><TodoItem item={task} index={index} onDelete={onDelete} onComplete={onComplete}/></ListGroup.Item>
                            ))}
                    </ListGroup>
                </Row>
            }
            <Row>
                <Col>
                    <ButtonGroup>
                        <Button variant='danger' onClick={toggleOrder}>{currentOrder ? 'Order by Asc' : 'Order by Desc'}</Button> 
                        <Button variant='warning' onClick={() => toggleShowState(1)} disabled={filter === 1 && tasks.length > 0}>Completed</Button> 
                        <Button variant='primary' onClick={() => toggleShowState(2)} disabled={filter === 2 && tasks.length > 0}>Not Completed</Button> 
                        <Button variant='info' onClick={() =>toggleShowState(0)} disabled={filter === 0  && tasks.length > 0}>Show All</Button> 
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default TodoItemList