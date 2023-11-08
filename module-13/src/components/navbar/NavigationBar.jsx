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
import { useState, useRef } from "react";



const NavigationBar = () => {
  const [source, setSource ]= useState("https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg")

  const darkMode = useRef(false);
  const handleClick = () => {
    // const prev = darkMode.current.src
    darkMode.current.src = source;
    // setSource = prev;
  };

  let isEmployed = false;
  return (
    <div>
      <nav className="top-nav">
        <div>
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

        <div  className="">
          <img ref={darkMode} onClick={handleClick} src="https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg" alt="ERR" />
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