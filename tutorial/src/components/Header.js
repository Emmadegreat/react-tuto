import PropTypes from ''
import React from 'prop-types'

const Header=({ title })=>{
  return (
    <div><h1>{ title }</h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href=""><img src={"./logo.PNG"} alt="" id="page_icon" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-home" style={{ color:"red" }}>&nbsp;</i>Home</a>
                        </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about" >About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/html/services.html" style={headdingStyle}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/html/contact.html">Contact us</a>
                    </li>
                </ul>
              </div>
        </div>
      </nav>
    </div>
      
  )
}

Header.defaultProps={
  title = 'Task Tracker',
}

Header.PropTypes ={
  title:PropTypes.string.isRequired,
}

const headdingStyle= {
  backgroundColor:'red',
  color:'blue'
}

export default Header
