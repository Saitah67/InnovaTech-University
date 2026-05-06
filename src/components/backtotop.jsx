import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        onClick={scrollToTop}
        style={{
          ...styles.button,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <FaArrowUp />

        {/* Optional progress ring */}
        <svg style={styles.svg} viewBox="0 0 36 36">
          <path
            style={styles.bgCircle}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            style={{
              ...styles.progressCircle,
              strokeDasharray: `${scrollProgress}, 100`,
            }}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
      </div>
    </>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    backgroundColor: "#111",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    fontSize: "18px",
    zIndex: 9999,
  },

  svg: {
    position: "absolute",
    width: "55px",
    height: "55px",
    top: 0,
    left: 0,
    transform: "rotate(-90deg)",
  },

  bgCircle: {
    fill: "none",
    stroke: "#444",
    strokeWidth: "2",
  },

  progressCircle: {
    fill: "none",
    stroke: "#f0c040",
    strokeWidth: "2",
    strokeLinecap: "round",
    transition: "stroke-dasharray 0.2s ease",
  },
};

export default BackToTop;