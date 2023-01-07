import "./PortfoliocardStyle.css";
import pro1 from "../assets/img/Project1.png";
import {NavLink} from "react-router-dom";

import React from 'react'

const Work = () => {
  return (
     <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
        <div className="project-card">
        <img src={pro1} alt="image" /> 
        <h2 className="project-title">Project Title</h2>
        <div className="pro-details">
            <p>This is text</p>
            <div className="pro-btns"></div>
            <NavLink to="url.com"
            className="btn">Website</NavLink>
            <NavLink to="url.com"
            className="btn">GitHub</NavLink>
        </div> 

        </div>
      </div>
    </div>
  );
};

export default Work;
