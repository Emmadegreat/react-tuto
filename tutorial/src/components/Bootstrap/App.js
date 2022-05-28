import 'bootstrap/dist/css/bootstrap.css'
import './bootstrap.css'

import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from './About'
import Error from './Error'
import Home from './Home';
import React from 'react'
import { ReactDOM } from 'react-dom';

function App() {
  return (
    <Router className="app_1">
      <Navbar bg="myRed" variant="dark" fixed="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={"../logo.PNG"} alt="" srcset="" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>

          <Nav>
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="./About">About Us</Nav.Link>
            <Nav.Link href="./Contact">Contact</Nav.Link>
            <Nav.Link href="./Service">Services</Nav.Link>
            <Nav.Link href="./Blog">Blog</Nav.Link>
            <NavDropdown title="product">
              <NavDropdown.Item href=".#products/electronics">electronics</NavDropdown.Item>
              <NavDropdown.Item href="./">Phones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="./">office equipment</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    <section className="content">
      <Routes>
       
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
         
      </Routes>
    </section>
      
      
    </Router>
  )
}

export default App
