import "./Footerstyle.css"

import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
         <div className="location">
        <FaHome size={20} style={
            {color:"#fff", marginRight:"2rem" }}/>
            <div>
                <p>San Francisco</p>
            </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={
            {color:"#fff", marginRight:"2rem" }}/> 916-945-3476</h4>
            </div>

           <div className="email">
            <h4><FaMailBulk size={20} style={
            {color:"#fff", marginRight:"2rem" }}/> clairefreeman528@gmail.com</h4>
           
            </div>
            </div>

        <div className="right">
            <h4>Let's Connect</h4>
            <div className="social">
            <FaGithub size={30} style={
            {color:"#fff", marginRight:"1rem" }}/>
             <FaLinkedin size={30} style={
            {color:"#fff", marginRight:"1rem" }}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
