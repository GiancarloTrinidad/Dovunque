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
    const [reservename, setReserveName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [guestCount, setGuestCount] = useState('');
    const [reserveDate, setReserveDate] = useState('');
    const [reserveTime, setReserveTime] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/reserve", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ reservename, phoneNumber, guestCount, reserveDate, reserveTime }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error);

            setSuccess("Registration successful! You can now log in.");
            setError('');
            setReserveName('');
            setPhoneNumber('');
            setGuestCount('');
            setReserveDate('');
            setReserveTime('');
        } catch (err) {
            setError(err.message);
            setSuccess('');
         }
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

                                <Form onSubmit={handleSubmit} className='px-4'>      {/*noValidate validated={validated}*/}
                                    <Form.Group className="mb-3" controlId="formUsername">
                                        <Form.Control required type="text" 
                                                    placeholder="Name"
                                                    value={reservename}
                                                    onChange={(e) => setReserveName(e.target.value)} 
                                                    />
                                        <Form.Control.Feedback type="invalid" className='fs-6'> 
                                            Please enter a name.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control required type="number" 
                                                      placeholder="Phone Number"
                                                      value={phoneNumber}
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                    />
                                        <Form.Control.Feedback type="invalid" className='fs-6'> 
                                            Please enter a phone number.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control required type="number" 
                                                        placeholder="Number of Guests"
                                                        value={guestCount}
                                                        onChange={(e) => setGuestCount(e.target.value)}/>
                                        <Form.Control.Feedback type="invalid" className='fs-6'> 
                                            Please enter the number of guests.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control required type="date" 
                                                    placeholder="Date"
                                                    value={reserveDate}
                                                    onChange={(e) => setReserveDate(e.target.value)}/>
                                        <Form.Control.Feedback type="invalid" className='fs-6'> 
                                            Please enter a date.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control required type="time"
                                                    placeholder="Time"
                                                    value={reserveTime}
                                                    onChange={(e) => setReserveTime(e.target.value)}/>
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

        </div>

      );
};

export default Reservation;