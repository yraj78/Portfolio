import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'skyblue' }}>
      <div className="container">
        <ScrollLink className="navbar-brand" to="home" smooth={true} duration={500}>Yash</ScrollLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <ScrollLink className="nav-link" to="home" smooth={true} duration={500}>Home</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="about" smooth={true} duration={500}>About</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="skills" smooth={true} duration={500}>Skills</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="works" smooth={true} duration={500}>Works</ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;