import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import schoollogo from "../images/schoollogo.png";

const Navbar = () => {
  const [shrink, setShrink] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Sports", path: "/sports" },
    { name: "Library", path: "/library" },
    { name: "Contact", path: "/contacts" },
    { name: "FAQ", path: "/faq" },
    { name: "Admin", path: "/admin" }
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed-top w-100 px-3 py-2 d-flex align-items-center justify-content-between transition-all ${
          shrink ? "py-1" : "py-2"
        }`}
        style={{
          background: "rgba(15, 15, 25, 0.55)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          zIndex: 1050
        }}
      >
        {/* Brand */}
        <Link
          to="/"
          className="d-flex align-items-center gap-2 text-decoration-none text-white"
        >
          <img
            src={schoollogo}
            alt="logo"
            style={{ height: shrink ? 38 : 48, transition: "0.3s" }}
          />
          <div className="d-flex flex-column">
            <strong style={{ fontSize: shrink ? 14 : 16 }}>
              InnovaTech University
            </strong>
            <small style={{ fontSize: 11, opacity: 0.8 }}>
              Innovation • Excellence • Integrity
            </small>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white text-decoration-none small"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/apply"
            className="btn btn-warning btn-sm fw-semibold"
          >
            Apply Now
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="btn d-lg-none text-white"
          onClick={() => setOpen(true)}
        >
          <span style={{ fontSize: 26 }}>☰</span>
        </button>
      </nav>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              zIndex: 1100
            }}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 90 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100%",
              width: 280,
              background: "rgba(20, 20, 35, 0.85)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              zIndex: 1200,
              padding: 20,
              borderRight: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            {/* Close */}
            <button
              onClick={closeMenu}
              className="btn text-white mb-3"
            >
              ✕
            </button>

            {/* Links */}
            <div className="d-flex flex-column gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className="text-white text-decoration-none"
                  style={{ fontSize: 16 }}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/apply"
                onClick={closeMenu}
                className="btn btn-warning fw-semibold mt-2"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
