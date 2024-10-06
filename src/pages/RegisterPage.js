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
        <div className="col d-flex justify-content-center">
  
        <Container fluid>
        <Card className="center" style={{borderRadius: '25px'}}>
        <Card.Body>
            <Row className="justify-content-md-center">
                <Col>
                <h1 className="text-center"><b>Register</b></h1>
                    
                    <Form>      
                    {/* Username */}
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    

                    {/* Email */}
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                    

                    {/* Password */}
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                            <Form.Control
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
                            <Form.Label htmlFor="inputPassword5">Re-enter Password</Form.Label>
                            <Form.Control
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
                    <center>
                        Already have an account?
                        <Nav.Link as = {Link} to="/login"><b>Login Here</b></Nav.Link>
                    </center>
                </Col>

                <Col>
                    Image goes here
                </Col>
            </Row>
            </Card.Body>
            </Card>
        </Container>
        </div>
    );
}

export default Register;