import '../side__bar.css'

import {Link, NavLink, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import { set } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Home from './Home'
import About from './About';
import Contact from './Contact';

 

const Header=()=>{
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
      
    }
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false)
        setSidebar(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const linkStyle={
    color:'#fff'
  }

  
  return (
    <Router>
      <nav className="navbar">
        <h1 className="navbar__logo"><a href="">LOGO</a></h1>
        
        {!mobile && (
          <ul className="nav__items">
            <li className="nav__link">
              <NavLink className="links" to="./Home">Home</NavLink>
            </li>
            <li className="nav__link">
              <NavLink className="links" to="./About">About</NavLink>
            </li>
            <li className="nav__link">
              <NavLink className="links" to="./Blog">Blog</NavLink>
            </li>
            <li className="nav__link">
              <NavLink className="links" to="./Contact">Contact</NavLink>
            </li>
            
          </ul>
        )}
        

        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
            <FontAwesomeIcon icon={ faTimes } className="sidebar-toggle-logo" onClick={() => setSidebar(!sidebar)} />) :(
            <FontAwesomeIcon icon={ faBars } className="sidebar-toggle-logo" onClick={() => setSidebar(!sidebar)} />
             )}

          </div>
        )}

      </nav>

      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar__items">
            <li className="sidebar__link">
              <NavLink className="link" onClick={()=>setSidebar(false)} to="./Home">Home</NavLink>
            </li>
            <li className="sidebar__link">
              <NavLink className="link" onClick={()=>setSidebar(false)} to="./About">About</NavLink>
            </li>
            <li className="sidebar__link">
              <NavLink className="link" onClick={()=>setSidebar(false)} to="./Blog">Blog</NavLink>
            </li>
            <li className="sidebar__link">
              <NavLink className="link" onClick={()=>setSidebar(false)} to="./Contact">Contact</NavLink>
          </li>
          <li className="sidebar__links">
            <button className="btn btn-primary"><NavLink className="links" onClick={()=>setSidebar(false)} to="./sign__up">sign up</NavLink></button>
          </li>
        </ul>
        
        
      </div>
      <Routes>
        <Route path ="/Home" element={<Home />} />
        <Route path ="/About" element={<About />} />
        <Route path ="/Contact" element={<Contact/>} />
      </Routes>
      
      
    </Router>
    
      
  )
}


export default Header
