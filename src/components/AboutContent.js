import "./AboutContentstyle.css";
import {Link} from "react-router-dom";
 import Avatar from "../assets/img/Avatar.png";

 import React from 'react';

 const AboutContent = () => {
   return <div className="about">
      <div className="left">
         <h1>Get to Know Me</h1>
     <p> I am expanding my knowledge in the world of web development who has a passion for website design and problem solving. <br /> <br />
                I have been in Marketing for three years and looking to explore my love for coding into my career.
                </p> 
     <Link to="/contact">
     <a href="https://www.linkedin.com/in/claire-freeman-958b16156/"><button className="btn">Contact</button></a>
     </Link>
         </div> 
         <div className="right">
            <div className="img-container">
                 <img src={Avatar} 
                 className="img" alt="true"/>
                </div>
            </div>
        </div> 
   
 };

export default AboutContent;
