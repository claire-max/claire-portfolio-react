import "./PortfoliocardStyle.css";
import {NavLink} from "react-router-dom";

import React from 'react'

const Portfoliocard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="image" /> 
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns"></div>
            <NavLink to= {props.website}
            className="btn">Website</NavLink>
            <NavLink to= {props.github}
            className="btn">GitHub</NavLink>
        </div> 

        </div> 
  );
};

export default Portfoliocard;
