import React from 'react';
import './Skills.css';
import jsimg from '../assets/javascript.jpg';
import apiimg from '../assets/api.jpg';
import gitimg from '../assets/git.jpg';
import reactimg from '../assets/react.jpg';
import htmlcssimg from '../assets/html and css.jpg';
import nodejsimg from '../assets/nodejs.jpg';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        <li>
          <div className="image-container">
            <img src={jsimg} alt="JavaScript" />
            <div className="overlay">JavaScript</div>
          </div>
        </li>
        <li>
          <div className="image-container">
            <img src={reactimg} alt="React" />
            <div className="overlay">ReactJS</div>
          </div>
        </li>
        <li>
          <div className="image-container">
            <img src={htmlcssimg} alt="HTML & CSS" />
            <div className="overlay">HTML & CSS</div>
          </div>
        </li>
        <li>
          <div className="image-container">
            <img src={gitimg} alt="Git" />
            <div className="overlay">Git</div>
          </div>
        </li>
        <li>
          <div className="image-container">
            <img src={apiimg} alt="RESTful APIs" />
            <div className="overlay">RESTful APIs</div>
          </div>
        </li>
        <li>
          <div className="image-container">
            <img src={nodejsimg} alt="Node.js" />
            <div className="overlay">NodeJS</div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
