import React from 'react';
import './Home.css';
import homeImage from '../assets/home-image .jpg'
// import BlobComponent from './blob.jsx';

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="extra-space"></div>
      <img src={homeImage} alt="Your Image" className="home-image" />
      <div className="intro">
        <h2 className='home-hello'>Hello,</h2> 
        <h2 className='home-name'>I'm Ansh Verma</h2>
      </div>
      {/* <BlobComponent /> */}
    </div>
  );
};

export default Home;
