import React, { useState } from "react";
import axios from "axios";

const AddAnnouncement = () => {

  const [form, setForm] = useState({
    title: "",
    message: "",
    category: ""
  });

  const [loading, setLoading] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // SUBMIT ANNOUNCEMENT
  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await axios.post(
        "https://vincentfungo.alwaysdata.net/api/university/add_announcement",
        form,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log("RESPONSE:", res.data);

      alert(res.data.message);

      // CLEAR FORM
      setForm({
        title: "",
        message: "",
        category: ""
      });

    } catch (err) {

      console.log("FULL ERROR:", err);

      alert(
        err?.response?.data?.message ||
        "Failed to add announcement"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="card shadow p-4 mt-5">

      <h4 className="mb-4 fw-bold">
        Add Announcement
      </h4>

      <form onSubmit={handleSubmit}>

        {/* TITLE */}
        <div className="mb-3">

          <label className="form-label">
            Title
          </label>

          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Announcement title"
            value={form.title}
            onChange={handleChange}
            required
          />

        </div>

        {/* MESSAGE */}
        <div className="mb-3">

          <label className="form-label">
            Message
          </label>

          <textarea
            name="message"
            rows="4"
            className="form-control"
            placeholder="Announcement message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

        </div>

        {/* CATEGORY */}
        <div className="mb-3">

          <label className="form-label">
            Category
          </label>

          <select
            name="category"
            className="form-control"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">
              Select category
            </option>

            <option value="Academic">
              Academic
            </option>

            <option value="Admissions">
              Admissions
            </option>

            <option value="Events">
              Events
            </option>

            <option value="General">
              General
            </option>

          </select>

        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Announcement"}
        </button>

      </form>

    </div>

  );
};

export default AddAnnouncement;