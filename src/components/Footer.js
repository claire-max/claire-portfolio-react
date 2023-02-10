import React from 'react'
import "./Footerstyle.css"
import {BsGithub, BsLinkedin} from 'react-icons/bs';
const Footer = () => {
  return (
    <section className="footer">
<br></br>
<section className="footer-social-media text-center text-white" style={{
        fontColor: 'white',
      }}>
        <a className="letsconnect">Let's Connect</a>
<div className="Socialss"> 
             <a href="https://github.com/claire-max"><BsGithub size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a> 
           
             <a href="https://www.linkedin.com/in/claire-freeman-958b16156/"><BsLinkedin size={30} style={
            {color:"#fff"}}/></a>
           
      </div>
</section>

<br></br>
<section className="footer-info-left">

<section className="footer-info_contactlist">
<ul className='listitems3'>
                <li>
                  <a href='#!' className='cali'>
                    California,CA 
                  </a>
                </li>
                {/* <li>
                  <a href='#!' className='text-white'>
                    916 934 9540
                  </a>
                </li> */}
                <li>
                  <a href='#!' className='text-white'>
                    clairefreeman528@gmail.com
                  </a>
                </li>
              </ul>
              <br/>
</section>
</section>
</section>


  );
};

export default Footer;




