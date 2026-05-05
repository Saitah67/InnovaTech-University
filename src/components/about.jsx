import React from "react";

const About = () => {
  return (
    <div>

      {/* HERO */}
      <div
        className="bg-dark text-white text-center py-5"
        style={{ background: "linear-gradient(135deg, #212529, #343a40)" }}
        data-aos="fade-up"
      >
        <h1 className="fw-bold display-5">About InnovaTech University</h1>
        <p className="lead">
          Excellence in Education, Innovation, and Research
        </p>
      </div>

      {/* WHO WE ARE */}
      <div className="container my-5">
        <div className="row align-items-center">

          <div className="col-md-6" data-aos="fade-right">
            <h2 className="fw-bold">Who We Are</h2>
            <p className="mt-3 text-muted">
              InnovaTech University is a modern institution dedicated to
              developing future leaders through quality education and
              innovation. We combine academic excellence with practical
              experience to prepare students for real-world challenges.
            </p>

            <ul className="mt-3">
              <li>✔ Industry-relevant programs</li>
              <li>✔ Experienced lecturers</li>
              <li>✔ Modern learning facilities</li>
            </ul>
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
              alt="University"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </div>

      {/* STATS SECTION */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <div className="row">

            <div className="col-md-3" data-aos="fade-up">
              <h2 className="fw-bold">10K+</h2>
              <p className="text-muted">Students</p>
            </div>

            <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
              <h2 className="fw-bold">120+</h2>
              <p className="text-muted">Courses</p>
            </div>

            <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
              <h2 className="fw-bold">95%</h2>
              <p className="text-muted">Graduation Rate</p>
            </div>

            <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
              <h2 className="fw-bold">50+</h2>
              <p className="text-muted">Partners</p>
            </div>

          </div>
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="container my-5">
        <div className="row text-center">

          <div className="col-md-6 mb-4" data-aos="fade-up">
            <div className="p-4 shadow rounded h-100">
              <h4 className="fw-bold">Our Mission</h4>
              <p className="text-muted">
                To provide quality education that fosters innovation,
                leadership, and societal impact.
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="p-4 shadow rounded h-100">
              <h4 className="fw-bold">Our Vision</h4>
              <p className="text-muted">
                To be a leading global university recognized for excellence
                in research and academic achievement.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* CORE VALUES */}
      <div className="container my-5">

        <h2 className="text-center fw-bold mb-4" data-aos="zoom-in">
          Our Core Values
        </h2>

        <div className="row text-center">

          {[
            "Integrity",
            "Innovation",
            "Excellence",
            "Diversity",
          ].map((value, index) => (
            <div
              className="col-md-3 mb-3"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-3 shadow-sm rounded h-100">
                {value}
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* CTA */}
      <div
        className="text-center py-5 text-white"
        style={{ background: "linear-gradient(135deg, #212529, #000)" }}
        data-aos="zoom-in"
      >
        <h3 className="fw-bold mb-3">
          Join InnovaTech University Today
        </h3>

        <p className="mb-4">
          Take the first step toward your future career in technology.
        </p>

        <a href="/apply" className="btn btn-warning btn-lg">
          Apply Now
        </a>
      </div>

    </div>
  );
};

export default About;