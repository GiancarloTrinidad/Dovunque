import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import PaymentModal from '../components/PaymentModal.js';

function Payment() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Container>
                <Row className='mt-5 pt-3'>   
                    <h1 className='display-4'><strong>Choose a payment method</strong></h1>
                </Row>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        {/* Mastercard */}
                        <Card>
                            <Card.Img 
                            variant="top" 
                            src={require("../assets/payment-mastercard.png")}
                            onClick={() => setModalShow(true)}
                            fluid/>
                        </Card>
                        {/* GCash */}
                        <Card>
                            <Card.Img variant="top" src={require("../assets/payment-gcash.png")} fluid/>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <PaymentModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Payment;