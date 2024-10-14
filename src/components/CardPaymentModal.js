import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function PaymentModal(props) {
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
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        keyboard={false}
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title className="fw-semibold" id="contained-modal-title-vcenter">Credit Card</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                
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
            </Form>

        </Modal.Body>

        {/* <Modal.Footer>
            <Button onClick={props.onHide}>Pay Now</Button>
        </Modal.Footer> */}

    </Modal>
    );
}

export default PaymentModal;