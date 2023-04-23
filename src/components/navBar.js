import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Row } from 'react-bootstrap';
import { useState } from 'react';

export const NavBar = ({ filterBySearch }) => {

  const [searchValue, setSeachValue] = useState("")
  const onSearch = (e) => {
    e.preventDefault()
    filterBySearch(searchValue)
    setSeachValue('')

  }

  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant='dark'>
        <Container >
          <Navbar.Brand href="#">
            <div className='brand-color'>
              مطعم جديد
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="ابحث ,,"
                className="mx-2"
                aria-label="Search"
                onChange={(e) => setSeachValue(e.target.value)}
                value={searchValue}
              />
              <button className='btn-search' onClick={(e) => onSearch(e)}>بحث</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}
