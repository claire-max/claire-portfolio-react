import "./NavbarStyle.css"
import {FaBars, FaTimes } from "react-icons/fa";
import React, {useState} from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor]= useState(false);
  const changeColor = () => {
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);


    return (
    <div className= {color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-bar active" : "nav-bar"}>
        <li>
          <Link className="homehov" to="/">Home</Link>
        </li>
        <li>
          <Link className="abouthov" to="/about">About</Link>
        </li>
        <li>
          <Link className="projectshov" to="/projects">Projects</Link>
        </li>
        <li>
          <Link className="contacthov" to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? ( <FaTimes size={30} style={{color:"#fff"}} />) :
        (<FaBars size={30} style={{color:"#fff"}} />)}
       
      </div>
    </div>
  )
}

export default NavBar;
