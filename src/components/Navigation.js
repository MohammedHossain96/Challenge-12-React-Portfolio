import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" className="active">About Me</NavLink>
      <NavLink to="/portfolio" className="active">Portfolio</NavLink>
      <NavLink to="/contact" className="active">Contact</NavLink>
      <NavLink to="/resume" className="active">Resume</NavLink>
    </nav>
  );
}

export default Navigation;