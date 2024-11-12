import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'

function MainNavbar() {
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary">
        <Container fluid="sm">
          <Navbar.Brand as = {Link} to ="/">Dovunque</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
              scroll="true"
          >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Dovunque
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as = {Link} to="/">Home</Nav.Link>
                  <Nav.Link as = {Link} to="/menu">Menu</Nav.Link>
                  <Nav.Link as = {Link} to="/payment">Payment</Nav.Link>
                  {/* <Nav.Link as = {Link} to="/register">Register</Nav.Link> */}
                  <Nav.Link as = {Link} to="/reservation">Reservation</Nav.Link>
                  <Button style={{ 'width':'5rem', 'border-radius': "50px" }} variant="danger" as = {Link} to="/login">Login</Button>  
                </Nav>
              </Navbar.Collapse>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;