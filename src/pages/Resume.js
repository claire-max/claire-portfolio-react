 import React from 'react';
 import "../components/resumestyle.css";
 import Navbar from "../components/Navbar";

 import Footer from "../components/Footer";
 import Carousel from 'react-bootstrap/Carousel';
 
 import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
 import { DiJqueryLogo } from "react-icons/di";
 import {  BsBootstrap } from "react-icons/bs";
 import { AiOutlineApi } from "react-icons/ai";
 import { SiExpress, SiMysql, SiSequelize, SiMongodb } from "react-icons/si";

 function Resume() {
  return (
    <div>
      <Navbar/>
  
      <div>
     
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Front-End Proficiencies</h3>
          <p>
          <a className="Html5" href="https://www.w3schools.com/html/"><FaHtml5 size={40} onMouseOver={({target})=>target.style.color="#ff8a8a"}
          onMouseOut={({target})=>target.style.color="white"}
   style={
            {color:"#fff", marginRight:"2rem", hover:"#333"}}/></a>
            <a href="https://www.w3schools.com/css/"><FaCss3Alt size={40} onMouseOver={({target})=>target.style.color="#87c1ff"}
          onMouseOut={({target})=>target.style.color="white"} style={
            {color:"#fff", marginRight:"2rem" }}/></a>
            <a href="https://www.w3schools.com/js/"><FaJs size={40} onMouseOver={({target})=>target.style.color="fdfd96"}
          onMouseOut={({target})=>target.style.color="white"} style={
            {color:"#fff", marginRight:"2rem" }}/></a>
            <a href="https://jquery.com/"><DiJqueryLogo size={40} onMouseOver={({target})=>target.style.color="blue"}
          onMouseOut={({target})=>target.style.color="white"} style={
            {color:"#fff", marginRight:"2rem" }}/></a>
            <a href="https://reactjs.org/"><FaReact size={40}  onMouseOver={({target})=>target.style.color="#61dbfb"}
          onMouseOut={({target})=>target.style.color="white"} style={
              {color:"#fff", marginRight:"2rem" }}/></a>
            <a href="https://getbootstrap.com/"><BsBootstrap size={40} onMouseOver={({target})=>target.style.color="#742cfc"}
          onMouseOut={({target})=>target.style.color="white"} style={
                {color:"#fff", marginRight:"2rem" }}/></a>
                </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Back-End Proficiencies</h3>
          <p>
            <a href="https://www.ibm.com/topics/api"><AiOutlineApi size={40} style={
           {color:"#fff", marginRight:"2rem" }}/></a>
           <a href="https://nodejs.org/en/"><FaNodeJs size={40} style={
              {color:"#fff", marginRight:"2rem" }}/></a>
               <a href="https://expressjs.com/"><SiExpress size={40} style={
                {color:"#fff", marginRight:"2rem" }}/></a>
                 <a href="https://www.mysql.com/"><SiMysql size={40} style={
                  {color:"#fff", marginRight:"2rem" }}/></a>
                   <a href="https://sequelize.org/"><SiSequelize size={40} style={
                    {color:"#fff", marginRight:"2rem" }}/></a>
                    <a href="https://www.mongodb.com/"><SiMongodb size={40} style={
                      {color:"#fff", marginRight:"2rem" }}/></a>
                      </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        />

        <Carousel.Caption>
          <a href= "https://www.linkedin.com/in/claire-freeman-958b16156/" className="btn">Download Resume</a>
          <p>

          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    <Footer/>
    </div>
  );
}

    export default Resume;
    