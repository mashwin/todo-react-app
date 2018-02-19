import React from 'react';
import { Grid, Row, Col, FormControl, Button, FormGroup, InputGroup } from 'react-bootstrap';

const TaskBar = () => (
    <Grid>
        <Row className="show-grid">
            <Col xs={12} md={12} sm={12} style={{ "textAlign": "center" }}>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" />
                        <InputGroup.Button>
                            <Button>Submit Todo</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </Col>
        </Row>
    </Grid>
);


export default TaskBar;