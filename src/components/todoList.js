import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../style.css';

const TodoList = ({ text, handleDeleteTodo }) => (
    <Row>
        <Col xs={12} md={12} sm={12}>
            <div className="clear"> {text}
                <Button className="remove-button" onClick={() => handleDeleteTodo({ text })}>Delete</Button>
            </div>
        </Col>
    </Row>
);

export default TodoList;