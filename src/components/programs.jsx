import React, { useEffect, useState } from "react";
import axios from "axios";

import business from "../images/eight.jpg";
import electrical from "../images/nine.jpg";
import engineering from "../images/two.jpg";
import computerengineering from "../images/seven.jpg";
import computerscience from "../images/three.jpg";
import library from "../images/five.jpg";

const Programs = () => {

  const [programs, setPrograms] = useState([]);

  const API = "https://vincentfungo.alwaysdata.net/api/university";

  useEffect(() => {
    axios.get(`${API}/programs`)
      .then((res) => {
        setPrograms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container my-5">

      <h2 className="text-center fw-bold mb-4" data-aos="zoom-in">
        Our Faculties & Programs
      </h2>

      <div className="row">

        {/* engineering card */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div className="card h-100 shadow program-card">
           <img src={engineering} className="card-img-top" alt="engineering" height={400} />
            <div className="card-body">
              <h5 className="card-title">School of Computing</h5>
              <p className="card-text">
                Explore software engineering, data science, and IT programs.
              </p>
            </div>
          </div>
        </div>

        {/* business card */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div className="card h-100 shadow program-card">
            <img src={business} className="card-img-top" alt="Business" height={400}/>
            <div className="card-body">
              <h5 className="card-title">School of Business</h5>
              <p className="card-text">
                Build skills in finance, marketing, and entrepreneurship.
              </p>
            </div>
          </div>
        </div>

        {/* electrical card */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
          <div className="card h-100 shadow program-card">
           <img src={electrical} className="card-img-top" alt="Electrical" height={400} />
            <div className="card-body">
              <h5 className="card-title">School of Electrical Engineering</h5>
              <p className="card-text">
                Study electrical circuits, power systems, and electronics.
              </p>
            </div>
          </div>
        </div>

        {/* computerengineering */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div className="card h-100 shadow program-card">
           <img src={computerengineering} className="card-img-top" alt="Computer Engineering" height={400} />
            <div className="card-body">
              <h5 className="card-title">School of Computer Engineering</h5>
              <p className="card-text">
                Dive into computer architecture, embedded systems, and software development.
              </p>
            </div>
          </div>
        </div>

        {/* computer science */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div className="card h-100 shadow program-card">
           <img src={computerscience} className="card-img-top" alt="Computer Science" height={400} />
            <div className="card-body">
              <h5 className="card-title">School of Computer Science</h5>
              <p className="card-text">
                Explore software engineering, data science, and IT programs.
              </p>
            </div>
          </div>
        </div>

                {/* Library Management */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div className="card h-100 shadow program-card">
           <img src={library} className="card-img-top" alt="Computer Science" height={400} />
            <div className="card-body">
              <h5 className="card-title">School of Library Management</h5>
              <p className="card-text">
                Explore library science and information management.
              </p>
            </div>
          </div>
        </div>

        

      </div>

      

      {/* 🔥 NEW: DATABASE PROGRAMS (ADDED BELOW, NO CHANGES ABOVE) */}
      <div className="row mt-5">

        {programs.map((prog, index) => (
          <div
            className="col-md-4 mb-4"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="card h-100 shadow program-card">
              <div className="card-body">
                <h5 className="card-title">{prog.name}</h5>
                <p className="card-text">{prog.description}</p>

                <span className="badge bg-warning text-dark">
                  {prog.category}
                </span>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Programs;