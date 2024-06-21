import React from 'react';
import './About.css';
import aboutImage from '../assets/about-image.jpg'; // Replace with your actual image path

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Me" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p className='second-about-text'>
            Front-end Developer & Designer
          </p>
          <p>
            {`As a passionate front-end developer, I'm dedicated to crafting responsive, user-friendly interfaces that delight users and drive business results. With a strong foundation in HTML, CSS, and JavaScript, I've honed my skills in modern front-end frameworks like React and Vue. I'm always seeking innovative ways to improve performance, accessibility, and overall user experience. Whether it's building custom UI components or optimizing website load times, I'm committed to delivering exceptional results that exceed expectations.`}
          </p>
          <button>
            {`Hire Me`}
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default About;