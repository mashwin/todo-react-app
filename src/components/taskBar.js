import React from 'react';
import { Row, Col, FormControl, Button, FormGroup, InputGroup } from 'react-bootstrap';

const TaskBar = ({ handleTextChange, handleTextSubmit }) => (
    <Row>
        <Col xs={12} md={12} sm={12}>
            <FormGroup>
                <InputGroup>
                    <FormControl type="text" onChange={(event) => handleTextChange(event.target.value)} />
                    <InputGroup.Button>
                        <Button onClick={() => handleTextSubmit()}>Submit Todo</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        </Col>
    </Row>
);


export default TaskBar;