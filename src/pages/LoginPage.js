import '../styles/AuthStyle.css'
import MainNavbar from '../components/MainNavbar'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='auth-bg'>
            <MainNavbar />
            <Container fluid = "md">
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <Card className='my-5'>
                            <Card.Body>
                                <h1 className="text-center mt-4 mb-3"><b>Login</b></h1> 

                                <Form className='px-4'>      
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
                                <div className="text-center d-grid mt-5">
                                    <Button 
                                        variant="danger" 
                                        className="rounded-pill" 
                                        type="submit"
                                    >
                                    Login
                                    </Button>

                                    <p className='pt-4 pb-2'>New user?
                                        <Nav.Link as = {Link} to="/register">
                                        <strong>Create an account</strong>
                                        </Nav.Link>
                                    </p>
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
}
export default Login;