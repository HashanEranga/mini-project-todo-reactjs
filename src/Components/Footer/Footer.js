import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.module.css"

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-4">
            <Container>
                <p className="text-center mb-0">Made with &#x2764; &copy; 2024 Todo App | by HashanEranga</p>
            </Container>
        </footer>
    )
}

export default Footer;