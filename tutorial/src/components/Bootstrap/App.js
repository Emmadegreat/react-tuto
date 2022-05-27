import 'bootstrap/dist/css/bootstrap.css'
import './bootstrap.css'

import { Navbar } from 'react-bootstrap';
import React from 'react'
import { ReactDOM } from 'react-dom';

function App_1() {
  return (
      <div className="app_1">
          <Navbar bg="myRed" variant="dark">
            <h2>hellow</h2>
              <Navbar.Brand>
                  <img src="../images/logo.PNG" alt="" srcset="" />
              </Navbar.Brand>

          </Navbar>
      
    </div>
  )
}

export default App_1
