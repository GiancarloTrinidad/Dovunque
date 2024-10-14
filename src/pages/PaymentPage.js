import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import CardPaymentModal from '../components/CardPaymentModal.js';
import QrPaymentModal from '../components/QrPaymentModal.js'

function Payment() {
    const [modalShow, setCardModalShow] = useState(false);

    return (
        <>
            <Container className="h-100">
                <Row className='mt-5 pt-3'>   
                    <h1 className='display-4'>Choose a payment method</h1>
                </Row>
                <Row xs={1} md={2} className="g-4 mh-0">
                    <Col>
                        {/* Mastercard */}
                        <Card>
                            <Card.Img 
                            variant="top" 
                            src={require("../assets/payment-mastercard.png")}
                            onClick={() => setCardModalShow(true)}
                            fluid/>
                        </Card>
                    </Col>
                    <Col>
                        {/* GCash */}
                        <Card>
                            <Card.Img 
                            variant="top" 
                            src={require("../assets/payment-gcash.png")}
                            // onClick={() => setQrModalShow(true)} 
                            fluid/>
                        </Card>
                    </Col>
                </Row>
                <Row></Row>
            </Container>

            <CardPaymentModal
                show={modalShow}
                onHide={() => setCardModalShow(false)}
            />

            {/* <QrPaymentModal
                show={modalShow}
                onHide={() => setQrModalShow(false)}
            /> */}
        </>
    );
}

export default Payment;