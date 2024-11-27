import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

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
                <Modal.Title className="fw-semibold" id="contained-modal-title-vcenter">{props.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {props.content}
                </Form>
            </Modal.Body>

            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Pay Now</Button>
            </Modal.Footer> */}

        </Modal>
    );
}

export default PaymentModal;