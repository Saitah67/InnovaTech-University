import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSportsView from "./adminviewsports";

import CreateAdmin from "./adminpage";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import {
  PieChart, Pie, Cell, Tooltip, Legend
} from "recharts";

const AdminDashboard = () => {

  const navigate = useNavigate();

  const [admin, setAdmin] = useState(null);
  const [applications, setApplications] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [messages, setMessages] = useState([]);
  
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // 🔥 UPGRADED ANNOUNCEMENT STATE
  const [announcement, setAnnouncement] = useState({
    title: "",
    message: "",
    category: "",
    broadcast: false
  });

  const API = "https://vincentfungo.alwaysdata.net/api/university";

  useEffect(() => {

    const storedAdmin = localStorage.getItem("admin");

    if (!storedAdmin) {
      navigate("/admin/login");
      return;
    }

    setAdmin(JSON.parse(storedAdmin));

    fetchApplications();
    fetchAnnouncements();
    fetchMessages();

  }, [navigate]);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(`${API}/applications`);
      setApplications(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const res = await axios.get(`${API}/announcements`);
      setAnnouncements(res.data);
    } catch (err) {
      console.log(err);
    }
  };



  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${API}/messages`);
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMessage = async (id) => {
  try {
    await axios.delete(`${API}/messages/${id}`);
    fetchMessages();
  } catch (err) {
    console.log(err);
  }
};




  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  const updateStatus = async (id, status) => {
    await axios.put(`${API}/applications/${id}/status`, { status });
    fetchApplications();
  };

  const deleteApplication = async (id) => {
    await axios.delete(`${API}/applications/${id}`);
    fetchApplications();
  };

  const deleteAnnouncement = async (id) => {
    await axios.delete(`${API}/delete_announcement/${id}`);
    fetchAnnouncements();
  };

  const handleChange = (e) => {
    setAnnouncement({
      ...announcement,
      [e.target.name]: e.target.value
    });
  };

  // 🔥 UPGRADED ANNOUNCEMENT SUBMIT
const handleAddAnnouncement = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await axios.post(`${API}/add_announcement`, {
      ...announcement,
      broadcast: announcement.broadcast
    });

    setAnnouncement({
      title: "",
      message: "",
      category: "",
      broadcast: false
    });

    fetchAnnouncements();

  } catch (err) {
    console.log(err);
  }

  setLoading(false);
};

  // =========================
  // ADVANCED FEATURES
  // =========================

  const filteredApplications = applications.filter(app =>
    (app.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      app.email?.toLowerCase().includes(search.toLowerCase())) &&
    (courseFilter ? app.course === courseFilter : true) &&
    (statusFilter ? app.status === statusFilter : true)
  );

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Applications Report", 10, 10);

    autoTable(doc, {
      head: [["Name", "Email", "Phone", "Course", "Grade", "Status"]],
      body: filteredApplications.map(a => [
        a.full_name, a.email, a.phone, a.course, a.kcse_grade, a.status || "Pending"
      ])
    });

    doc.save("applications.pdf");
  };

  const generateLetter = (app) => {
    const doc = new jsPDF();

    doc.text("UNIVERSITY ADMISSION LETTER", 20, 20);
    doc.text(`Name: ${app.full_name}`, 20, 40);
    doc.text(`Course: ${app.course}`, 20, 50);
    doc.text("Congratulations, you have been admitted.", 20, 70);

    doc.save(`${app.full_name}_admission.pdf`);
  };



  const analyticsData = [
    { name: "Pending", value: applications.filter(a => a.status === "Pending").length },
    { name: "Approved", value: applications.filter(a => a.status === "Approved").length },
    { name: "Rejected", value: applications.filter(a => a.status === "Rejected").length }
  ];

  if (!admin) return <div>Loading...</div>;



  return (
    <div className="d-flex bg-light">

      {/* SIDEBAR (DARK ERP STYLE) */}
      <div className="bg-dark text-white p-4" style={{ width: "260px", minHeight: "100vh" }}>

        <h3 className="fw-bold">ERP Admin</h3>

        <p className="text-muted">{admin.username}</p>

        <button className="btn btn-danger w-100 mt-3" onClick={logout}>
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}
      <div className="flex-grow-1 p-4">

        <h2 className="fw-bold mb-3">University ERP Dashboard</h2>

        {/* ANALYTICS */}
        <div className="card p-3 mb-4 shadow-sm">
          <h5>Application Analytics</h5>

          <PieChart width={400} height={250}>
            <Pie data={analyticsData} dataKey="value" nameKey="name" outerRadius={80} label>
              <Cell fill="#f39c12" />
              <Cell fill="#2ecc71" />
              <Cell fill="#e74c3c" />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>

        </div>

        {/* FILTERS */}
        <div className="row mb-3">

          <div className="col-md-4">
            <input className="form-control"
              placeholder="Search applicant"
              onChange={(e) => setSearch(e.target.value)} />
          </div>

          <div className="col-md-4">
            <select className="form-control"
              onChange={(e) => setCourseFilter(e.target.value)}>
              <option value="">All Courses</option>
              {[...new Set(applications.map(a => a.course))].map((c, i) => (
                <option key={i}>{c}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <select className="form-control"
              onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="">All Status</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>

        </div>

        <button className="btn btn-primary mb-3" onClick={exportPDF}>
          Export PDF
        </button>

        {/* APPLICATION TABLE */}
        <table className="table table-bordered">

          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Course</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredApplications.map(app => (

              <tr key={app.id}>

                <td>{app.full_name}</td>
                <td>{app.email}</td>
                <td>{app.course}</td>
                <td>{app.status || "Pending"}</td>

                <td>

                  <button className="btn btn-success btn-sm"
                    onClick={() => updateStatus(app.id, "Approved")}>
                    Approve
                  </button>

                  <button className="btn btn-danger btn-sm ms-1"
                    onClick={() => updateStatus(app.id, "Rejected")}>
                    Reject
                  </button>

                  <button
                    className="btn btn-outline-danger btn-sm ms-1"
                    onClick={() => deleteApplication(app.id)}
                  >
                    Delete
                  </button>

                  <button className="btn btn-info btn-sm ms-1"
                    onClick={() => generateLetter(app)}>
                    Letter
                  </button>



                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* ========================= */}
        {/* 🔥 UPGRADED ANNOUNCEMENTS */}
        {/* ========================= */}

        <div className="card p-3 mt-4 shadow-sm">

          <h4 className="fw-bold">📢 Announcement Center</h4>

          <form onSubmit={handleAddAnnouncement}>

            <input
              className="form-control mb-2"
              name="title"
              placeholder="Title"
              value={announcement.title}
              onChange={handleChange}
              required
            />

            <textarea
              className="form-control mb-2"
              name="message"
              placeholder="Message"
              value={announcement.message}
              onChange={handleChange}
              required
            />

            <select
              className="form-control mb-2"
              name="category"
              value={announcement.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option>Academic</option>
              <option>Events</option>
              <option>Admissions</option>
              <option>General</option>
            </select>

            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                name="broadcast"
                checked={announcement.broadcast}
                onChange={(e) =>
                  setAnnouncement({ ...announcement, broadcast: e.target.checked })
                }
              />
              <label className="form-check-label">
                Broadcast to all students
              </label>
            </div>

            <button className="btn btn-success">
              {loading ? "Publishing..." : "Publish Announcement"}
            </button>

          </form>

        </div>

        {/* ANNOUNCEMENT LIST */}
        <div className="card p-3 mt-3 shadow-sm">

          <h4>Recent Announcements</h4>

          {announcements.map(a => (

            <div key={a.id} className="border p-2 mb-2 bg-light">

              <h6 className="fw-bold">{a.title}</h6>
              <p>{a.message}</p>

              <span className="badge bg-primary">{a.category}</span>

              {a.broadcast && (
                <span className="badge bg-success ms-2">
                  Broadcast
                </span>
              )}

              <br />

              <button
                className="btn btn-danger btn-sm mt-2"
                onClick={() => deleteAnnouncement(a.id)}
              >
                Delete
              </button>

            </div>

          ))}

        </div>
        <div className="card mt-4 p-3">

  <h4>📩 Incoming Messages</h4>

  {messages.length === 0 ? (
    <p>No messages yet</p>
  ) : (

    messages.map(msg => (

      <div key={msg.id} className="border p-2 mb-2">

        <h6>{msg.name} ({msg.email})</h6>

        <p>{msg.message}</p>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteMessage(msg.id)}
        >
          Delete
        </button>

      </div>

    ))

  )}

</div>

<AdminSportsView />

        {/* ADMIN */}
        <CreateAdmin />

      </div>
    </div>
  );
};

export default AdminDashboard;