import { Navbar, Nav, Container } from 'react-bootstrap';

export function NavigationBar() {
    return (
      <Navbar bg="light " fixed="top" collapseOnSelect  expand="lg">
        <Container>
          <Navbar.Brand href="/">Your Brand Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              {/* Add more links as needed */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }