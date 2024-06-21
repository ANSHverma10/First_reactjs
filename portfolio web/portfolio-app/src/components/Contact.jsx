// Contact.jsx
import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out via email:</p>
        <p><a href="mailto:ansh49022@gmail.com">ansh49022@gmail.com</a></p>
        <p>Follow us on social media for updates:</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/ll__vermanshahi___ll/" className="social-icon" id='Instagram' ><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
          <a href="https://x.com/AnshVer09590118" className="social-icon" id='Twitter' ><FontAwesomeIcon icon={faXTwitter} className="icon" /></a>
          <a href="https://www.facebook.com/Vermanshahi" className="social-icon" id='Linkdin' ><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
