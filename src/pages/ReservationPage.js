import '../components/DovunqueStyle.css';
import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Reservation () {
    return (

        <div className="Reservation">
    <Card style={{ width: '20rem' ,backgroundColor: '#5CA921', color: 'white'}}>
         Make a Reservation
            <Form style={{padding: '20px'}}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={1} placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={1} placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={1} placeholder="Number of Guests" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={1} placeholder="Date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={1} placeholder="Time" />
                </Form.Group>

                <Button variant="danger">Submit</Button>{' '}
            </Form>
        </Card>
        </div>

      );
};

export default Reservation;