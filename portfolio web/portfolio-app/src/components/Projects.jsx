import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Personal Portfolio Website</h3>
          <p>A personal portfolio website showcasing skills, projects, and contact information.</p>
          <div className="project-links">
            <a href="https://www.linkedin.com/posts/ansh-verma-7a0257258_webdevelopment-portfolio-digitalportfolio-activity-7196797575843237888-jU8c?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a href="https://github.com/your-profile/project1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </div>
        </div>
        <div className="project">
        <h3>Related Project: First Website</h3>
        <p>Description of the related project to the personal portfolio website.</p>
          <div className="project-links">
            <a href="https://www.linkedin.com/posts/ansh-verma-7a0257258_webdevelopment-throwbackthursday-websitedesign-activity-7195370224538337280-tQ0Z?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a href="https://github.com/ANSHverma10/Website-Codes/tree/main/My%20first%20Portfolio%20website" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </div>
        </div>
        <div className="project">
        <h3>Tic Tac Toe Game using ReactJS</h3>
        <p>A classic Tic Tac Toe game built with ReactJS.</p>
          <div className="project-links">
            <a href="https://www.linkedin.com/posts/ansh-verma-7a0257258_reactjs-webdevelopment-frontend-activity-7205845640998825984-3PdS?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a href="https://github.com/ANSHverma10/PRODIGY_Trackcode_TaskNumber/tree/main/tic-tac-toe/src" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
