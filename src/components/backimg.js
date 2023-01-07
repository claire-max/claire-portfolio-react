import "./backimgstyle.css";
import {Link} from "react-router-dom";
import React from 'react'
import FrontImg from "../assets/img/Back.jpg"

const backimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="front-img" 
            src={FrontImg} alt="FrontImg"/>
        </div>
      <div className="content">
        <p>Welcome to my Portfolio</p>
        <h1>Hi! I'm Claire </h1> 
        <div>
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/resume" className="btn btn-light">Resume</Link>
        </div>
      </div>
    </div>
  )
}

export default backimg
