import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h4>Sun Emirates</h4>
            <p>
              Sun Emirates Mechanical Works LLC is a leading steel fabrication 
              company in Ajman, U.A.E, specializing in stainless steel and 
              mild steel fabrication for industrial, commercial, and residential projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/equipments">Equipments</Link>
            <Link to="/clients">Clients</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <Link to="/services">Steel Fabrication</Link>
            <Link to="/services">Structural Works</Link>
            <Link to="/services">Pipe Fabrication</Link>
            <Link to="/services">Welding Works</Link>
            <Link to="/services">Surface Treatment</Link>
            <Link to="/services">Machine Shop</Link>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>
              P.O. Box: 14655<br />
              Al Shenaya New Industrial Area<br />
              Ajman, U.A.E
            </p>
            <p>
              <strong>Phone:</strong> +971-6-7481646
            </p>
            <p>
              <strong>Mobile:</strong> +971-50-7743556
            </p>
            <p>
              <strong>Email:</strong> sales@sunemirates.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {currentYear} Sun Emirates Mechanical Works LLC. All rights reserved.</p>
          
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              f
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
