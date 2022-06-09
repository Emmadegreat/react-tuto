import '../side__bar.css'

import {Link, NavLink, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import Button from './Button';
import Home from './Home';

const Header=()=>{

  const linkStyle={
    color:'#fff'
  }
  return (
    <Router>
      <nav className="navbar">
        <li><a href="">LOGO</a></li>
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
        <button />
      </nav>
      
      
    </Router>
    
      
  )
}


export default Header
