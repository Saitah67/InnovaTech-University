import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      const res = await axios.post(
        "https://vincentfungo.alwaysdata.net/api/university/admin/login",
        form,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log("LOGIN RESPONSE:", res.data);

      if (res.data.success) {

        // SAVE ADMIN
        localStorage.setItem(
          "admin",
          JSON.stringify(res.data.admin)
        );

        alert("Login successful");

        // NAVIGATE TO DASHBOARD
        navigate("/admin/dashboard");

      } else {

        alert("Invalid credentials");

      }

    } catch (err) {

      console.log("LOGIN ERROR:", err);

      alert("Login failed");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <div className="card p-4 shadow" style={{ width: "350px" }}>

        <h3 className="text-center mb-3">
          Admin Login
        </h3>

        <form onSubmit={handleLogin}>

          {/* USERNAME */}
          <input
            type="text"
            name="username"
            className="form-control mb-3"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default AdminLogin;