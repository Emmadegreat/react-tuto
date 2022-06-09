import '../side__bar.css'

import {Link, NavLink, Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import React from 'react'

const Button = () => {
  return (
    <div>
      <NavLink to="Signup">
        <button className="btn"><span>Sign Up</span></button>
      </NavLink>
      
    </div>
  )
}

export default Button
