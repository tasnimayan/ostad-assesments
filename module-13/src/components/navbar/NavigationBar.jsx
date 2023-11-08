import { NavLink } from "react-router-dom";
// import { NavLink } from 'react-router-dom';
import './navbar.style.css'
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Blog from './../../pages/Blog';
import Service from "../../pages/Service";
import Project from "../../pages/Project";
import Contact from "../../pages/Contact";
import { useRef } from "react";



const NavigationBar = () => {

  const myLogo = useRef();


  let isEmployed = false;
  return (
    <div>
      <nav className="top-nav">
        <div ref={myLogo}>
          <img src="./src/assets/ta_logo.png" alt="tasnim ayan logo" className="nav-logo" />
        </div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/blogs">Blogs</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="toggle">
          {isEmployed?<span>Send an email</span>:<span>Hire Me</span>}
        </div>
      </nav>

      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
        
      

    </div>

  );
};

export default NavigationBar;