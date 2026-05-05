import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="university-footer">

      <div className="container py-5">

        <div className="row g-4">

          {/* Column 1 - About */}
          <div className="col-md-4">
            <h5 className="footer-title">InnovaTech University</h5>
            <p className="footer-text">
              A leading institution committed to excellence in education,
              innovation, and research. We prepare students for global impact.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-md-3">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div className="col-md-2">
            <h5 className="footer-title">Resources</h5>
            <ul className="footer-links">
              <li><Link to="/library">Library</Link></li>
              <li><Link to="/sports">Sports</Link></li>
              <li><Link to="/apply">Apply</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/sports">Sports</Link></li>
              <li><Link to="/contacts">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="col-md-3">
            <h5 className="footer-title">Contact</h5>
            <p className="footer-text">
              Nairobi, Kenya <br />
              Email: vincentsaitah67@gmail.com <br />
              Phone: +254 718 935 463
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom text-center mt-4 pt-3">
          <p className="mb-0">
            © {new Date().getFullYear()} InnovaTech University. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;