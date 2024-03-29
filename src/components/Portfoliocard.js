import "./PortfoliocardStyle.css";

import React from 'react'

const Portfoliocard = (props) => {
  return (
    <div className="project-card">
        <img className="projectimg" src={props.imgsrc} alt="projectimage" /> 
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns"></div>
            <a href= {props.website}
            className="btn">Website</a>
            <a href= {props.github}
            className="btn">GitHub</a>
            
        </div> 
</div>
  );
};

export default Portfoliocard;
