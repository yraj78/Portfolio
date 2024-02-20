import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'skyblue'}}>
      <div className="container">
        <ScrollLink className="navbar-brand" to="home" smooth={true} duration={500}>Yash</ScrollLink>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <ScrollLink className="nav-link" to="home" smooth={true} duration={500} style={{ marginRight: '40px' }}>Home</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="about" smooth={true} duration={500} style={{ marginRight: '40px' }}>About</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="skills" smooth={true} duration={500} style={{ marginRight: '40px' }}>Skills</ScrollLink>
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
