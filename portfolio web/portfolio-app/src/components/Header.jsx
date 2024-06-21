import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <div className="two-nav">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
          </nav>
          <button>
            <a href="#weather">Weather</a>
          </button>
      </div>
    </header>
  );
};

export default Header;
