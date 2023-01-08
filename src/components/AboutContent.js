import "./AboutContentstyle.css";
import {Link} from "react-router-dom";
 import Avatar from "../assets/img/Avatar.png";
 
 import React from 'react';

 const AboutContent = () => {
   return <div className="about">
      <div className="left">
         <h1>Get to Know Me</h1>
     <p>nfovvfnovndfo;vnodfv;dfo;vfovfjnjv.</p> 
     <Link to="/contact">
     <button className="btn">Contact</button>
     </Link>
         </div> 
         <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                 <img src={Avatar} 
                 className="img" alt="true"/>
                </div>
                </div>
            </div>
        </div> 
   
 };

export default AboutContent;
