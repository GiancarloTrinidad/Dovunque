import '../styles/AuthStyle.css'
import MainNavbar from '../components/MainNavbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

function Register() {
    return (   
        <div className="auth-bg">
            <MainNavbar />
            <Container className='my-5'>
                <Card className="RegisterCard" fluid>
                    <Row className='g-0'>
                        <Col md='6'>
                            <Card.Body className='d-flex flex-column px-5'>
                            <h1 className="text-center py-5 fw-bold">Create Account</h1>
                            
                            <Form>      
                            {/* Username */}
                                <Form.Group className="mb-3" controlId="formUsername">
                                    <Form.Label className="fw-semibold">Username</Form.Label>
                                    <Form.Control required type="text" />
                                </Form.Group>
                            

                            {/* Email */}
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className="fw-semibold">Email address</Form.Label>
                                    <Form.Control required type="email" placeholder="name@example.com" />
                                </Form.Group>
                            

                            {/* Password */}
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label htmlFor="inputPassword5" className="fw-semibold">Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                    />
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Your password must be 8-15 characters long, contain letters and numbers,
                                        and must not contain spaces, special characters, or emojis.
                                    </Form.Text>
                                </Form.Group>

                            {/* Re-enter Password */}
                                <Form.Group className="mb-3" controlId="formPassword2">
                                    <Form.Label htmlFor="inputPassword5" className="fw-semibold">Re-enter Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        id="inputPassword5"
                                    />
                                </Form.Group>
                            

                            {/* Sign Up Button */}
                            <div className="d-grid my-4">
                                    <Button variant="danger" className='rounded-pill' type='submit'>
                                        Sign Up
                                    </Button>
                            </div>
                            </Form>

                            {/* Link to Login */}
                            <div className='text-center pt-3'>
                                Already have an account?
                                <Nav.Link as = {Link} to="/login"><b>Login Here</b></Nav.Link>
                            </div>
                            </Card.Body>
                        </Col>

                        <Col md='6'>
                            <Card.Img src={require('../assets/pizzeria.jpg')} 
                            alt='register image' 
                            height={750} 
                            className='object-fit-cover rounded-end w-100' 
                            fluid/>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    );
}

export default Register;