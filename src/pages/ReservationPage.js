import '../styles/DovunqueStyle.css';
import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Reservation () {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (

        <div className="Reservation">
    <Container fluid = "md">
                <Row>
                    <Col></Col>
                    <Col xs={4}>
                        <Card className="ReservationForm">
                            <Card.Body>
                                <h3 className="text-center mt-1 mb-4 fw-bold">          Make a Reservation</h3> 

                                <Form noValidate validated={validated} onSubmit={handleSubmit} className='px-4'>      
                                    <Form.Group className="mb-3" controlId="formUsername">
                                        <Form.Control required type="text" placeholder="Name"/>
                                        <Form.Control.Feedback type="invalid" className='fs-6'> 
                                            Please enter a name.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control required type="text" placeholder="Phone Number"/>
                                        <Form.Control.Feedback type="invalid" className='fs-6'> 
                                            Please enter a phone number.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control required type="number" placeholder="Number of Guests"/>
                                        <Form.Control.Feedback type="invalid" className='fs-6'> 
                                            Please enter the number of guests.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control required type="date" placeholder="Date"/>
                                        <Form.Control.Feedback type="invalid" className='fs-6'> 
                                            Please enter a date.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control required type="time" placeholder="Time"/>
                                        <Form.Control.Feedback type="invalid" className='fs-6'> 
                                            Please enter a time.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                <div className="text-center d-grid mt-5">
                                    <Button 
                                        variant="danger" 
                                        className="rounded-pill" 
                                        type="submit"
                                    >
                                    Reserve
                                    </Button>
                                </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

    {/* <Card style={{ width: '20rem' ,backgroundColor: '#5CA921', color: 'white'}}>
         Make a Reservation
            <Form style={{padding: '20px'}}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control type="textarea" rows={1} placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control type="textarea" rows={1} placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control type="textarea" rows={1} placeholder="Number of Guests" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control type="textarea" rows={1} placeholder="Date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control type="textarea" rows={1} placeholder="Time" />
                </Form.Group>

                <Button variant="danger">Submit</Button>{' '}
            </Form>
        </Card> */}
        </div>

      );
};

export default Reservation;