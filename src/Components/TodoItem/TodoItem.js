import React from "react";
import Button from 'react-bootstrap/Button'
import styles from './TodoItem.module.css'
import { Row, Col, Container, ButtonGroup } from "react-bootstrap";

const TodoItem = ({item, index, onDelete, onComplete}) => {

    const handleDelete = () => {
        console.log(index)
        onDelete(index)
    }

    const handleComplete = () => {
        console.log(item)
        onComplete(item)
    }

    return (
        <Container>
            <Row>
                <Col className={`${item.completed ? styles.done : ''} mt-2`}>{item.title}</Col>
                <Col className="d-flex justify-content-end"> 
                    <ButtonGroup>
                        <Button variant="primary" onClick={handleComplete}>{item.completed ? 'Undo' : 'Done'}</Button>
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default TodoItem;