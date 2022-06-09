import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Footer from './include/Footer'
import Header from './include/Header'
import React from 'react'
import { ReactDOM } from 'react-dom';

function App() {
  return (
    <div className="App_1">
      <Header />

      <Footer />
    </div>
  )
}

export default App
