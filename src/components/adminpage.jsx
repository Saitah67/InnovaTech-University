import React, { useState } from "react";
import axios from "axios";

const CreateAdmin = () => {

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://vincentfungo.alwaysdata.net/api/university/admin/create",
        form,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      alert(res.data.message);

      setForm({
        username: "",
        password: ""
      });

    } catch (err) {
      console.log(err);
      alert(err?.response?.data?.message || "Error creating admin");
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow p-4">

            <h3 className="text-center mb-3">Create Admin</h3>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="username"
                className="form-control mb-3"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                className="form-control mb-3"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="btn btn-success w-100"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Admin"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CreateAdmin;