import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
    return (
        <Container fluid = "md">
            <Row className="justify-content-md-center">
                <Col>
                    <h1>
                        <b>Login</b>
                    </h1>

                    <Form>      
                    {/* Username */}
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                    {/* Password */}
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                            <Form.Control
                                type="password"
                                id="inputPassword5"
                            />
                        </Form.Group>

                    {/* Login Button */}
                    <div className="d-grid my-4">
                            <Button variant="danger" className='rounded-pill' type='submit'>
                                Login
                            </Button>
                    </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default Login;