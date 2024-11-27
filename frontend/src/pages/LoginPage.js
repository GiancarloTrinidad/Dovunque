import '../styles/AuthStyle.css';
import MainNavbar from '../components/MainNavbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error);

            localStorage.setItem("token", data.token);
            setSuccess("Login successful!");
            setError("");
        } catch (err) {
            setError(err.message);
            setSuccess("");
        }
    };

    return (
        <div className='auth-bg'>
            <MainNavbar />
            <Container fluid="md">
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <Card className='my-5'>
                            <Card.Body>
                                <h1 className="text-center mt-4 mb-3 fw-bold">Login</h1> 

                                <Form className='px-4' onSubmit={handleSubmit}>
                                    {/* Username */}
                                    <Form.Group className="mb-3" controlId="formUsername">
                                        <Form.Label className="fw-bold">Username</Form.Label>
                                        <Form.Control 
                                            required 
                                            type="text" 
                                            placeholder="Enter your username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </Form.Group>

                                    {/* Password */}
                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <Form.Label htmlFor="inputPassword5" className="fw-bold">Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            id="inputPassword5"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>

                                    {/* Error Message */}
                                    {error && <p className="text-danger text-center">{error}</p>}

                                    {/* Success Message */}
                                    {success && <p className="text-success text-center">{success}</p>}

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
                                            <Nav.Link as={Link} to="/register">
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
