import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <img src="https://soulsounds.lk/wp-content/uploads/2024/10/logo-large.png" alt="Soul Sounds Logo" style={{ height: '60px', objectFit: 'contain' }} />
          </Link>
          <p className="footer-desc">
            Award winning all-women choir from Sri Lanka. Experience the magic of harmonious voices and passionate performances.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/Soul.Sounds.SriLanka" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.youtube.com/channel/UCEjzcamvBmtm5EXAM7BX0NQ" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/events">Tour Dates</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-links">
            <li>Email: info@soulsounds.lk</li>
            <li>Phone: +94 11 234 5678</li>
            <li>Location: Colombo, Sri Lanka</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Soul Sounds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
