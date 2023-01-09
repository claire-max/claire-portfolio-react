import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
       <Navbar />
       <HeroImg heading="ABOUT" text="I'm a Front-End Developer" />
      <Footer />
      <AboutContent />
    </div>
  );
};

export default About;
