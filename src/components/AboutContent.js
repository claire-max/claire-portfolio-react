import "./AboutContentstyle.css";
import {Link} from "react-router-dom";
 import Avatar from "../assets/img/Profile.mp4";

 import React from 'react';

 const AboutContent = () => {
   return <div className="about">
      <div className="left">
         <h1>Get to Know Me</h1>
     <p> 
     I have a strong background in HTML, CSS, JavaScript, React, Next, Node, jQuery, Express, Handlebars, SQL, API, MongoDB, Tailwind, and Bootstrap. Passionate about utilizing UX/UI principles to create the best user experience. I am a Full-Stack Development graduate from UC Berkeley Extension with a degree in Economics from Clemson University eager to join a creative, problem solving team. Ability to learn and implement new technologies quickly. Take a look at my work and get in touch! 
                </p> 
     <Link to="/contact">
     <a href="https://www.linkedin.com/in/claire-freeman-958b16156/"><button className="btn">Contact</button></a>
     </Link>
         </div> 
         <div className="right">
            <div className="img-container">
            <video className="profilepic" autoPlay loop muted>
    <source
      src={Avatar} 
      
      type="video/mp4"
      
    />
  </video>
 
                 {/* <img src={Avatar} 
                 className="img" alt="true"/> */}
                </div>
            </div>
        </div> 
   
 };

export default AboutContent;
