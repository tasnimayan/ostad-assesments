import { NavLink } from "react-router-dom";
// import { NavLink } from 'react-router-dom';
import './navbar.style.css'
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Team from "../../pages/Team";
import Service from "../../pages/Service";
import Project from "../../pages/Project";
import Testimonial from "../../pages/Testimonial";



const NavBar = () => {

  // let isLogged = false;
  return (
    <div>
      <nav className="top-nav">
        <div>
          <h3 className="logo">Design<span className="logo-accent">AGENCY</span></h3>
        </div>
        <div>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive? "active": ''}>Home</NavLink></li>
            <li><NavLink to="/team" className={({ isActive }) => isActive? "active": ''}>Team</NavLink></li>
            <li><NavLink to="/service" className={({ isActive }) => isActive? "active": ''}>Service</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive? "active": ''}>Projects</NavLink></li>
            <li><NavLink to="/testimonial" className={({ isActive }) => isActive? "active": ''}>Testimonial</NavLink></li>
            <li><button className="btn login border-1 ">Login</button></li>
            <li><button className="btn register">Register</button></li>
          </ul>
        </div>
        
      </nav>

      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
      </Routes>

    </div>

  );
};

export default NavBar;