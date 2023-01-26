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


<section className="footer-info-left">

<section className="footer-info_contactlist">
<ul className='listitems3'>
                <li>
                  <a href='#!' className='cali'>
                    California,CA 
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    916 934 9540
                  </a>
                </li>
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




// import "./Footerstyle.css"

// import React from 'react'
// import {FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin} from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="footer-container">
//         <div className="left">
//          <div className="location">
//         <FaHome size={20} style={
//             {color:"#fff", marginRight:"2rem" }}/>
//             <div>
//                 <p>San Francisco</p>
//             </div>
//             </div>
//             <div className="phone">
//             <h4><FaPhone size={20} style={
//             {color:"#fff", marginRight:"2rem" }}/> 916-945-3476</h4>
//             </div>

//            <div className="email">
//             <h4><FaMailBulk size={20} style={
//             {color:"#fff", marginRight:"2rem" }}/> clairefreeman528@gmail.com</h4>
           
//             </div>
//             </div>

//         <div className="right">
//             <h4>Let's Connect</h4>
//             <div className="social">
//             <a href="https://github.com/claire-max"><FaGithub size={30} style={
//             {color:"#fff", marginRight:"1rem" }}/></a>
//              <a href="http://www.linkedin.com/in/claire-freeman-958b16156"><FaLinkedin size={30} style={
//             {color:"#fff", marginRight:"1rem" }}/></a>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
