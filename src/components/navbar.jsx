import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import schoollogo from "../images/schoollogo.png";
import "./navbar.css";

const Navbar = () => {
  const [shrink, setShrink] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 👈 controls collapse

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow-sm fixed-top ${
        shrink ? "navbar-shrink" : ""
      }`}
    >
      {/* Brand */}
      <Link
        className="navbar-brand d-flex align-items-center gap-3"
        to="/"
        onClick={closeNavbar}
      >
        <img
          src={schoollogo}
          alt="InnovaTech University Logo"
          className={`navbar-logo ${shrink ? "logo-shrink" : ""}`}
        />

        <div className="brand-text d-flex flex-column">
          <span className={`brand-title fw-bold ${shrink ? "text-small" : ""}`}>
            InnovaTech University
          </span>
          <small
            className={`brand-subtitle text-warning ${
              shrink ? "hide-subtitle" : ""
            }`}
          >
            Knowledge • Innovation • Excellence
          </small>
        </div>
      </Link>

      {/* Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Links */}
      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
        <ul className="navbar-nav ms-auto align-items-lg-center">

          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/academics" onClick={closeNavbar}>Academics</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/programs" onClick={closeNavbar}>Programs</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/gallery" onClick={closeNavbar}>Gallery</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/sports" onClick={closeNavbar}>Sports</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/library" onClick={closeNavbar}>Library</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contacts" onClick={closeNavbar}>Contact</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/faq" onClick={closeNavbar}>FAQ</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin" onClick={closeNavbar}>Admin</Link>
          </li>

          <li className="nav-item">
            <Link
              className="btn btn-warning ms-lg-3 mt-2 mt-lg-0 fw-semibold"
              to="/apply"
              onClick={closeNavbar}
            >
              Apply Now
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;