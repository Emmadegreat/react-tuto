import './navbar.css'

import {NavLink, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import React, { useState } from 'react'

import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';

const Navbar = () => {

    const [click, setClick]= useState(false);
    const handleClick =()=>setClick(!click);
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click ? "nav-menu active":"nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" className="Nav-link" onClick={handleClick}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" activeClassName="active" className="Nav-link" onClick={handleClick}>Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" activeClassName="active" className="Nav-link" onClick={handleClick}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="about" activeClassName="active" className="Nav-link" onClick={handleClick}>About</NavLink>
            </li>
          </ul> 
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default Navbar
