import React from "react";
import volley from "../images/volley.jpg"
import bike from "../images/bike.jpg"
import football from "../images/football.jpg"
import athletics from "../images/athletics.jpg"
import tennis from "../images/tennis.jpg"
import tabletennis from "../images/tabletennis.jpg"
import rugby from "../images/rugby.jpg"
import swimming from "../images/swim.jpg"
import basketball from "../images/basketball.jpg"

const Sports = () => {
  return (
    <div>

      {/* HERO */}
      <div
        className="bg-success text-white text-center py-5"
        style={{ background: "linear-gradient(135deg, #000, #333)" }}
        data-aos="fade-up"
      >
        <h1 className="fw-bold display-5">Sports at InnovaTech</h1>
        <p className="lead">Building Champions On and Off the Field</p>
      </div>

      {/* INTRO */}
      <div className="container my-5">
        <div className="row align-items-center">

          <div className="col-md-6" data-aos="fade-right">
            <h2 className="fw-bold">Our Sports Culture</h2>
            <p className="text-muted mt-3">
              At InnovaTech University, we believe in developing both the mind
              and body. Our sports programs encourage teamwork, discipline,
              and excellence through competitive and recreational activities.
            </p>

            <ul>
              <li>Professional coaching</li>
              <li>Modern sports facilities</li>
              <li>Inter-university competitions</li>
            </ul>
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <img
              src={bike}
              alt="Sports"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </div>

      {/* SPORTS LIST */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4" data-aos="zoom-in">
            Sports Offered
          </h2>

          <div className="row text-center">

            {[
              { name: "Football", img: football },
              { name: "Basketball", img: basketball },
              { name: "Volleyball", img: volley },
              { name: "Athletics", img: athletics },
              { name: "Swimming", img: swimming },
              { name: "Rugby", img: rugby },
              { name: "Tennis", img: tennis },
              { name: "Table Tennis", img: tabletennis },
            ].map((sport, index) => (
              <div
                className="col-md-3 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card shadow-sm h-100">
                  <img
                    src={sport.img}
                    alt={sport.name}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{sport.name}</h5>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4" data-aos="fade-up">
          Our Achievements
        </h2>

        <div className="row text-center">

          <div className="col-md-4" data-aos="fade-up">
            <h3 className="fw-bold">15+</h3>
            <p className="text-muted">Championship Trophies</p>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <h3 className="fw-bold">50+</h3>
            <p className="text-muted">Professional Athletes Produced</p>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="fw-bold">20+</h3>
            <p className="text-muted">Annual Competitions</p>
          </div>

        </div>
      </div>

      {/* GALLERY */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4" data-aos="zoom-in">
          Sports Gallery
        </h2>

        <div className="row">

          {[
            football,
            basketball,
            volley,
            athletics,
            swimming,
            rugby,
          ].map((img, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="overflow-hidden rounded shadow-sm">
                <img
                  src={img}
                  alt="Sports gallery"
                  className="img-fluid"
                  style={{ height: "220px", width: "100%", objectFit: "cover", transition: "0.3s" }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div
        className="text-center py-5 text-white"
        style={{ background: "linear-gradient(135deg, #000, #333)" }}
        data-aos="zoom-in"
      >
        <h3 className="fw-bold mb-3">Join Our Sports Programs</h3>
        <p className="mb-4">Be part of a winning team and grow your talent.</p>

       
      </div>

    </div>
  );
};

export default Sports;