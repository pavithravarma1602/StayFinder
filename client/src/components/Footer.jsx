import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>StayFinder</h2>
          <p>
            Find the perfect PG or room that matches your budget,
            location, and lifestyle.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/find-pg">Find PG</Link>
          <Link to="/compare">Compare</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@stayfinder.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 StayFinder. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;