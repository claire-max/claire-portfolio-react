import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Portfoliocard from '../components/Portfoliocard';


const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="PROJECTS" text="Checkout some of my recent work!" />
      <Portfoliocard />
      <Footer />
    </div>
  )
}

export default Projects;
