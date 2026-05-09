import React, { useState } from "react";
import axios from "axios";

import volley from "../images/volley.jpg";
import bike from "../images/bike.jpg";
import football from "../images/football.jpg";
import athletics from "../images/athletics.jpg";
import tennis from "../images/tennis.jpg";
import tabletennis from "../images/tabletennis.jpg";
import rugby from "../images/rugby.jpg";
import swimming from "../images/swim.jpg";
import basketball from "../images/basketball.jpg";

const Sports = () => {

  const API = "https://vincentfungo.alwaysdata.net/api/university";

  const [form, setForm] = useState({
    name: "",
    email: "",
    sport: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // SUBMIT REGISTRATION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post(`${API}/sports/register`, form);

      setMessage("✅ Registration successful!");

      setForm({
        name: "",
        email: "",
        sport: ""
      });

    } catch (err) {
      console.log(err);
      setMessage("❌ Registration failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <div>

      {/* HERO */}
      <div
        className="bg-success text-white text-center py-5"
        style={{ background: "linear-gradient(135deg, #000, #333)" }}
      >
        <h1 className="fw-bold display-5">Sports at InnovaTech</h1>
        <p className="lead">Building Champions On and Off the Field</p>
      </div>

      {/* INTRO */}
      <div className="container my-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h2 className="fw-bold">Our Sports Culture</h2>
            <p className="text-muted mt-3">
              We develop both mind and body through competitive sports programs.
            </p>

            <ul>
              <li>Professional coaching</li>
              <li>Modern facilities</li>
              <li>Inter-university competitions</li>
            </ul>
          </div>

          <div className="col-md-6">
            <img src={bike} alt="Sports" className="img-fluid rounded shadow" />
          </div>

        </div>
      </div>

      {/* SPORTS LIST */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
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
              { name: "Table Tennis", img: tabletennis }
            ].map((sport, index) => (
              <div className="col-md-3 mb-4" key={index}>

                <div className="card shadow-sm h-100">

                  <img
                    src={sport.img}
                    alt={sport.name}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                  />

                  <div className="card-body text-center">
                    <h5>{sport.name}</h5>
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* REGISTRATION FORM */}
      <div className="container my-5">

        <div className="card shadow p-4">

          <h3 className="text-center fw-bold mb-4">
            🏅 Sports Registration
          </h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <select
              className="form-control mb-3"
              name="sport"
              value={form.sport}
              onChange={handleChange}
              required
            >
              <option value="">Select Sport</option>
              <option>Football</option>
              <option>Basketball</option>
              <option>Volleyball</option>
              <option>Athletics</option>
              <option>Swimming</option>
              <option>Rugby</option>
              <option>Tennis</option>
              <option>Table Tennis</option>
            </select>

            <button className="btn btn-success w-100">
              {loading ? "Registering..." : "Register Now"}
            </button>

            {message && (
              <p className="text-center mt-3 fw-bold">
                {message}
              </p>
            )}

          </form>

        </div>

      </div>

      {/* CTA */}
      <div className="text-center py-5 text-white"
        style={{ background: "linear-gradient(135deg, #000, #333)" }}>

        <h3 className="fw-bold mb-3">Join Our Sports Programs</h3>
        <p className="mb-4">Be part of a winning team and grow your talent.</p>

      </div>

    </div>
  );
};

export default Sports;