import React from "react";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";


import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/claire-portfolio-react/" element={<Home/>} />
      <Route path="/claire-portfolio-react/about" element={<About/>} />
      <Route path="/claire-portfolio-react/projects" element={<Projects/>} />
      <Route path="/claire-portfolio-react/resume" element={<Resume/>} />  
      <Route path="/claire-portfolio-react/contact" element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;
