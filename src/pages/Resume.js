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
          <p><FaHtml5 size={40} style={
            {color:"#fff", marginRight:"2rem" }}/><FaCss3Alt size={40} style={
            {color:"#fff", marginRight:"2rem" }}/><FaJs size={40} style={
            {color:"#fff", marginRight:"2rem" }}/><DiJqueryLogo size={40} style={
            {color:"#fff", marginRight:"2rem" }}/><FaReact size={40} style={
              {color:"#fff", marginRight:"2rem" }}/><BsBootstrap size={40} style={
                {color:"#fff", marginRight:"2rem" }}/></p>
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
          <p><AiOutlineApi size={40} style={
            {color:"#fff", marginRight:"2rem" }}/><FaNodeJs size={40} style={
              {color:"#fff", marginRight:"2rem" }}/><SiExpress size={40} style={
                {color:"#fff", marginRight:"2rem" }}/><SiMysql size={40} style={
                  {color:"#fff", marginRight:"2rem" }}/><SiSequelize size={40} style={
                    {color:"#fff", marginRight:"2rem" }}/><SiMongodb size={40} style={
                      {color:"#fff", marginRight:"2rem" }}/></p>
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
    