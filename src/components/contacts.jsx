import React, { useState } from "react";
import axios from "axios";

const Contacts = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://vincentfungo.alwaysdata.net/api/university/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (err) {
      console.log(err);
      alert(
        err?.response?.data?.message ||
        "Failed to send message"
      );
    }

    setLoading(false);
  };

  return (
    <div>

      {/* HERO */}
      <div className="bg-dark text-white text-center py-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="lead">Get in touch with InnovaTech University</p>
      </div>

      <div className="container my-5">
        <div className="row">

          {/* CONTACT INFO */}
          <div className="col-md-5 mb-4">
            <h3 className="fw-bold mb-3">Reach Us</h3>

            <p>Location: Nairobi, Kenya</p>
            <p>Phone Number: 0718 935 463</p>
            <p>Email: vincentsaitah67@gmail.com</p>

            <hr />

            <p className="text-muted">
              Our support team is available Monday to Friday,
              8:00 AM - 5:00 PM.
            </p>
          </div>

          {/* FORM */}
          <div className="col-md-7">
            <div className="card shadow p-4">

              <h4 className="fw-bold mb-3">Send us a message</h4>

              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="name"
                  className="form-control mb-3"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  className="form-control mb-3"
                  rows="5"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <button
                  type="submit"
                  className="btn btn-warning w-100"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contacts;