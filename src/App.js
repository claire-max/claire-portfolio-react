import React from "react";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename='/claire-portfolio-react'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/resume" element={<Resume/>} />  
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Home/>} />
    </Routes>
    </Router>
  );
}

export default App;
