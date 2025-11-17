import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        
        {/* top row: social left, links center, btn right */}
        <div className="footer-top">
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>

          <div className="footer-links">
            <a href="/gift-cards">Gift Cards</a>
            <a href="/jobs">Jobs</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="signup">
            <button type="submit">Sign Up</button>
          </div>
        </div>

        {/* bottom row: copyright */}
        <p className="copyright">
          © {new Date().getFullYear()} Food Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
