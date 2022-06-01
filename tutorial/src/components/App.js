import React from 'react'
import { ReactDOM } from 'react-dom';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Header from './include/Header'
import Footer from './include/Footer'

function App() {
  return (
    <div className="App_1">
      <Header />

      <Footer />
    </div>
  )
}

export default App
