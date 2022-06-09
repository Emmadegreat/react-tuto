import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'

import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from '../pages/About'
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Error from '../pages/Error'
import Home from '../pages/Home';
import React from 'react'
import { ReactDOM } from 'react-dom';
import Service from "../pages/Service";
import logo from '../images/logo.PNG'

const Header = () => {
    return (
        <Router className="app_1">
            <Navbar bg="myRed" variant="dark" fixed="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                    <img src={logo} alt="" srcset="" id="img" />
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>

                    <Nav>
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="./About">About Us</Nav.Link>
                        <Nav.Link href="./Contact">Contact</Nav.Link>
                        <Nav.Link href="./Service">Service</Nav.Link>
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
       
                    <Route path="/About" element={<About />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/Service" element={<Service />} /> 
        
                </Routes>
            </section>
      
      
        </Router>
    )
}

export default Header
