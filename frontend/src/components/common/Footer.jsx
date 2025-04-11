import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" }
  ];

  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5 border-top border-secondary">
      <div className="container">
        <div className="row g-5">
          {/* Branding & Mission */}
          <div className="col-lg-6">
            <h2 className="h4 fw-bold text-white mb-3">NIT JSR Freshers' Hub</h2>
            <p className="small mb-2">
              Empowering freshers with information, support, and a sense of community.
              Discover campus life, resources, and connect with peers.
            </p>
            <p className="text-muted small">Welcome to your new beginning at NIT Jamshedpur.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled small">
              {quickLinks.map((link) => (
                <li key={link.path} className="mb-1">
                  <Link to={link.path} className="footer-link text-light text-decoration-none">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h5 className="text-white mb-3">Contact Us</h5>
            <address className="small text-light">
              <div>NIT Jamshedpur Campus</div>
              <div>Jamshedpur, Jharkhand, India</div>
              <div className="mt-2">
                <a
                  href="mailto:freshershub@nitjsr.ac.in"
                  className="footer-link text-decoration-none d-block mb-1"
                >
                  freshershub@nitjsr.ac.in
                </a>
                <a
                  href="tel:+911234567890"
                  className="footer-link text-decoration-none"
                >
                  +91 12345 67890
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-4 mt-4 border-top border-secondary small footer-text">
          <p className="mb-1">
            &copy; {currentYear} NIT JSR Freshers' Hub. All rights reserved.
          </p>
          <p>
            Built with ❤️ by students, for students | Inclusive & Accessible
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
