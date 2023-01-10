import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Work from "../components/Work";



const Projects = () => {
  return (
    <div>
      <Navbar />
      <div id="!projects-hero"></div>
      <HeroImg heading="PROJECTS" text="Checkout some of my recent work!" />
      <Work />
      <Footer />
    </div>
  )
}

export default Projects;
