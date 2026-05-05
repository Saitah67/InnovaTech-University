import React, { useState } from "react";
import axios from "axios";

const Apply = () => {

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    course: "",
    kcse_grade: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://vincentfungo.alwaysdata.net/api/university/apply", formData)
      .then((res) => {
        alert(res.data.message);

        // reset form
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          course: "",
          kcse_grade: ""
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Application failed. Try again.");
      });
  };

  return (
    <div>

      {/* HERO */}
      <div className="bg-dark text-white text-center py-5">
        <h1 className="fw-bold">Apply to InnovaTech University</h1>
        <p className="lead">
          Start your academic journey with us today
        </p>
      </div>

      {/* FORM */}
      <div className="container my-5">
        <div className="row justify-content-center">

          <div className="col-md-8">
            <div className="card shadow p-4">

              <h3 className="fw-bold mb-4 text-center">
                Application Form
              </h3>

              <form onSubmit={handleSubmit}>

                {/* FULL NAME */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    className="form-control"
                    placeholder="Enter full name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* PHONE */}
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* COURSE */}
                <div className="mb-3">
                  <label className="form-label">Select Course</label>
                  <select
                    name="course"
                    className="form-control"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Course --</option>
                    <option>Computer Science</option>
                    <option>Software Engineering</option>
                    <option>Information Technology</option>
                    <option>Business Management</option>
                    <option>Electrical Engineering</option>
                  </select>
                </div>

                {/* KCSE GRADE */}
                <div className="mb-3">
                  <label className="form-label">KCSE Grade</label>
                  <input
                    type="text"
                    name="kcse_grade"
                    className="form-control"
                    placeholder="e.g B+, A-, C+"
                    value={formData.kcse_grade}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* SUBMIT */}
                <button className="btn btn-warning w-100 fw-bold">
                  Submit Application
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Apply;