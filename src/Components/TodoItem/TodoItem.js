import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import styles from './TodoItem.module.css'
import { Row, Col, Container, ButtonGroup } from "react-bootstrap";

const TodoItem = ({item, index, onDelete}) => {
    const [isDone, setIdDone] = useState(false)
    
    const toggleDone = () => {
        setIdDone(!isDone)
    }

    const handleDelete = () => {
        console.log(index)
        onDelete(index)
    }

    return (
        <Container>
            <Row>
                <Col className={`${isDone ? styles.done : ''} mt-2`}>{item}</Col>
                <Col className="d-flex justify-content-end"> 
                    <ButtonGroup>
                        <Button variant="primary" onClick={toggleDone}>{isDone ? 'Undo' : 'Done'}</Button>
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default TodoItem;