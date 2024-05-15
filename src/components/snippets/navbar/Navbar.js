import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbar.css'

function NavScrollExample() {
  return (
    <Navbar expand="lg" sticky="top" bg="dark" data-bs-theme="dark" className="bg-body-tertiary navibar">
      <Container fluid className='xl:mx-8 lg:mx-5 md:mx-2'>
      <Navbar.Brand href="/" className='fs-2 fw-bold'>
            TRAVL<i className="fab fa-gripfire fs-1"></i>
          </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>

          
          
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
        <div className='d-flex'>
          <div className='alm-btn md:me-3 xs:me-0'>
          <span class="fs-6">AE</span>
              </div>
              <div className='icon-btn'>
              <i class="material-symbols-outlined fs-3">person</i>
              </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;