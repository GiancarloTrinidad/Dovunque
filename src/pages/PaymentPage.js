import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import PaymentModal from '../components/PaymentModal.js';
import '../styles/Payment.css'

function Payment() {
    const [modalShow, setCardModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState("Default Content"); 
    const [modalContent, setModalContent] = useState("Default Content");

    const openModalWithContent = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setCardModalShow(true);
    }

    return (
        <>
            <Container className="h-100">
                <Row className='mt-5 pt-3'>   
                    <h1 className='display-4'>Choose a payment method</h1>
                </Row>
                <Row xs={1} md={2} className="g-4 mh-0">                
                    
                    <Col>
                        <div className="image-container bg-white">
                            <Image
                                className="scaled-image"
                                src={require("../assets/payment-mastercard.png")}
                                onClick={() => openModalWithContent(
                                    "Credit Card",
                                    <div>
                                        {/* Card Number */}
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold">Card Number</Form.Label>
                                            <Form.Control
                                            required
                                            type="text"
                                            placeholder="1234 5678 9012 3457" />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid credit card number.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                        
                                        {/* Cardholder's Name */}
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold">Cardholder's Name</Form.Label>
                                            <Form.Control
                                            required
                                            type="text"
                                            placeholder="Cardholder's Name" />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid name.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        
                                        <Row>
                                            {/* Expiration */}
                                            <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="fw-semibold">Expiration</Form.Label>
                                                <Form.Control
                                                required
                                                type="text"
                                                placeholder="MM/YYYY" />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a expiration number.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            </Col>
                        
                                            {/* CVV */}
                                            <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="fw-semibold">CVV</Form.Label>
                                                <Form.Control
                                                required
                                                type="text"
                                                placeholder="&#9679;&#9679;&#9679;" />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid CVV number.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            </Col>
                                        </Row>
                                        
                                        <div className="d-grid gap-2">
                                            <Button variant="danger" type="submit">Pay Now</Button>
                                        </div>
                                </div>
                            )}
                            fluid/>
                        </div>
                    </Col>

                    <Col>
                        {/* GCash */}
                        <div className="image-container bg-white">
                            <Image
                            className="scaled-image"
                            src={require("../assets/payment-gcash.png")}
                            onClick={() => openModalWithContent(
                                "GCash",
                                <Image src={require('../assets/payment-gcash-qr.jpg')} fluid/>
                            )}
                            fluid/>
                        </div>
                    </Col>
                </Row>
            </Container>

            <PaymentModal
                show={modalShow}
                title={modalTitle}
                content={modalContent}
                onHide={() => setCardModalShow(false)}   
            />
        </>
    );
}

export default Payment;