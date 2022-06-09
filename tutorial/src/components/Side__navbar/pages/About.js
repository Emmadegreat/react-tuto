import React from 'react'
import { useNavigate } from 'react-router-dom';

function About(){
  let navigate =useNavigate();
  return (
    <div>
        About us, ask and we will tell you.
        <button className="btn btn-primary" onClick={()=>navigate("/contact")}>press me</button>
    </div>
  )
}

export default About
