import React, { useState } from "react";
import axios from "axios";

const Contacts = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://vincentfungo.alwaysdata.net/api/university/contact", formData)
      .then((res) => {
        alert(res.data.message);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to send message");
      });
  };

  return (
    <div>

      {/* HERO */}
      <div className="bg-dark text-white text-center py-5" data-aos="fade-up">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="lead">
          Get in touch with InnovaTech University
        </p>
      </div>

      <div className="container my-5">
        <div className="row">

          {/* CONTACT INFO */}
          <div className="col-md-5 mb-4" data-aos="fade-right">
            <h3 className="fw-bold mb-3">Reach Us</h3>

            <p>Location: Nairobi, Kenya</p>
            <p>Phone Number: 0718 935 463</p>
            <p>Email: vincentsaitah67@gmail.com</p>

            <hr />

            <p className="text-muted">
              Our support team is available Monday to Friday,
              8:00 AM to 5:00 PM.
            </p>
          </div>

          {/* CONTACT FORM */}
          <div className="col-md-7" data-aos="fade-left">
            <div className="card shadow p-4">

              <h4 className="fw-bold mb-3">Send us a message</h4>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-warning">
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="container mb-5" data-aos="zoom-in">
        <h4 className="fw-bold mb-3 text-center">Our Location</h4>

        <div className="ratio ratio-16x9">
          <iframe
            src="https://maps.google.com/maps?q=Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="map"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default Contacts;