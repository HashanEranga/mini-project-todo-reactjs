import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Header.module.css";


const Header = () => {
    return(
        <header className={`${styles.header} bg-primary`}>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <div className="text-center">
                            <h1 className={styles.title}>Todo List</h1>                        
                            <p className={styles.subtitle}>Stay Organized and Productive</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;