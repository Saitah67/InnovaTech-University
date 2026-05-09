import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import schoollogo from "../images/schoollogo.png";
import "./navbar.css";

const Navbar = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow-sm fixed-top ${shrink ? "navbar-shrink" : ""}`}>

      {/* Brand */}
      <Link className="navbar-brand d-flex align-items-center gap-3" to="/">

        <img
          src={schoollogo}
          alt="InnovaTech University Logo"
          className={`navbar-logo ${shrink ? "logo-shrink" : ""}`}
        />

        <div className="brand-text d-flex flex-column">
          <span className={`brand-title fw-bold ${shrink ? "text-small" : ""}`}>
            InnovaTech University
          </span>
          <small className={`brand-subtitle text-warning ${shrink ? "hide-subtitle" : ""}`}>
            Knowledge • Innovation • Excellence
          </small>
        </div>

      </Link>

      {/* Toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-lg-center">

          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/academics">Academics</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/programs">Programs</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
          
          <li className="nav-item"><Link className="nav-link" to="/library">Library</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contacts">Contact</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/faq">FAQ</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
          

          <li className="nav-item">
            <Link className="btn btn-warning ms-lg-3 mt-2 mt-lg-0 fw-semibold" to="/apply">
              Apply Now
            </Link>
          </li>

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;