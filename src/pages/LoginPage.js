import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Container fluid = "md">
            <Row className="justify-content-md-center">
                <Col>
                    <h1 className="text-center"><b>Login</b></h1> 

                    <Form>      
                    {/* Username */}
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label><b>Username</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter your username"/>
                        </Form.Group>

                    {/* Password */}
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label htmlFor="inputPassword5"><b>Password</b></Form.Label>
                            <Form.Control
                                type="password"
                                id="inputPassword5"
                                placeholder="Enter your password"
                            />
                        </Form.Group>

                    {/* Login Button */}
                    <div className="text-center d-grid my-4">
                            <Button 
                                variant="danger" 
                                className="rounded-pill" 
                                type="submit"
                            >
                            Login
                            </Button>
                            <p>New user?<Nav.Link as = {Link} to="/register"><b>Create an account</b></Nav.Link></p>
                    </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default Login;