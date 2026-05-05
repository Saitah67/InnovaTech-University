import React from "react";

const Academics = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <div className="bg-dark text-white text-center py-5" data-aos="fade-up">
        <h1 className="fw-bold">Academics</h1>
        <p className="lead">
          Explore our diverse programs and faculties designed for excellence
        </p>
      </div>

      {/* FACULTIES SECTION */}
      <div className="container my-5">

        <h2 className="text-center fw-bold mb-4" data-aos="zoom-in">
          Our Faculties
        </h2>

        <div className="row">

          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card shadow h-100 program-card">
              <div className="card-body">
                <h5>School of Computing</h5>
                <p>Software Engineering, Data Science, IT</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card shadow h-100 program-card">
              <div className="card-body">
                <h5>School of Business</h5>
                <p>Finance, Marketing, Entrepreneurship</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card shadow h-100 program-card">
              <div className="card-body">
                <h5>School of Engineering</h5>
                <p>Civil, Electrical, Mechanical Engineering</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* PROGRAMS LIST */}
      <div className="bg-light py-5">

        <div className="container">

          <h2 className="text-center fw-bold mb-4" data-aos="fade-up">
            Popular Programs
          </h2>

          <div className="row">

            <div className="col-md-6 mb-3" data-aos="fade-right">
              <div className="p-3 shadow-sm bg-white rounded">
                BSc Software Engineering
              </div>
            </div>

            <div className="col-md-6 mb-3" data-aos="fade-left">
              <div className="p-3 shadow-sm bg-white rounded">
                Bachelor of Business Administration
              </div>
            </div>

            <div className="col-md-6 mb-3" data-aos="fade-right">
              <div className="p-3 shadow-sm bg-white rounded">
                BSc Electrical Engineering
              </div>
            </div>

            <div className="col-md-6 mb-3" data-aos="fade-left">
              <div className="p-3 shadow-sm bg-white rounded">
                Diploma in Information Technology
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="text-center py-5" data-aos="zoom-in">
        <h3 className="fw-bold mb-3">
          Ready to start your academic journey?
        </h3>

        <a href="/apply" className="btn btn-warning btn-lg">
          Apply Now
        </a>
      </div>

    </div>
  );
};

export default Academics;