import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';


const Header=()=>{

  const linkStyle={
    color:'#fff'
  }
  return (
    <Router>
      <header>
        <ul className="nav-links">
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="about" style={linkStyle}>About</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
          </ul>
        </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
        
    </Router>
    
      
  )
}


export default Header
