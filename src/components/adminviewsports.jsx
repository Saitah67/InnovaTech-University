import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "https://vincentfungo.alwaysdata.net/api/university";

const AdminSportsView = () => {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // =========================
  // FETCH APPLICANTS
  // =========================
  const fetchSports = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${API}/sports/registrations`);
      setSports(res.data || []);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSports();
  }, []);

  // =========================
  // APPROVE / REJECT
  // =========================
  const updateStatus = async (id, status) => {
    try {
      if (status === "Approved") {
        await axios.put(`${API}/sports/approve/${id}`);
      } else {
        await axios.put(`${API}/sports/reject/${id}`);
      }

      setMessage(`Updated to ${status}`);
      fetchSports();
    } catch (error) {
      console.error(error);
    }
  };

  // =========================
  // DELETE
  // =========================
  const deleteApplicant = async (id) => {
    try {
      await axios.delete(`${API}/sports/delete/${id}`);

      setMessage("Deleted successfully");
      fetchSports();
    } catch (error) {
      console.error(error);
    }
  };

  // =========================
  // EMAIL
  // =========================
  const sendEmail = async (email, status) => {
    try {
      await axios.post(`${API}/sports/email`, {
        email,
        subject: "Sports Application Update",
        message: `Your application has been ${status}`,
      });

      setMessage("Email sent");
    } catch (error) {
      console.error(error);
    }
  };

  // =========================
  // WHATSAPP (FIXED - NOW USED)
  // =========================
  const sendWhatsApp = async (phone, status) => {
    try {
      if (!phone) return;

      await axios.post(`${API}/sports/whatsapp`, {
        phone,
        message: `Your sports application is ${status}`,
      });

      setMessage("WhatsApp sent");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Sports Applicants</h3>

      {message && <div className="alert alert-info">{message}</div>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Sport</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {sports.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.sport}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <span
                    className={
                      item.status === "Approved"
                        ? "text-success"
                        : item.status === "Rejected"
                        ? "text-danger"
                        : "text-warning"
                    }
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  {/* APPROVE */}
                  <button
                    className="btn btn-success btn-sm me-1"
                    onClick={() => {
                      updateStatus(item.id, "Approved");
                      sendEmail(item.email, "Approved");
                      sendWhatsApp(item.phone, "approved");
                    }}
                  >
                    Approve
                  </button>

                  {/* REJECT */}
                  <button
                    className="btn btn-warning btn-sm me-1"
                    onClick={() => {
                      updateStatus(item.id, "Rejected");
                      sendEmail(item.email, "Rejected");
                      sendWhatsApp(item.phone, "rejected");
                    }}
                  >
                    Reject
                  </button>

                  {/* DELETE */}
                  <button
                    className="btn btn-danger btn-sm me-1"
                    onClick={() => deleteApplicant(item.id)}
                  >
                    Delete
                  </button>

                  {/* LETTER */}
                  <a
                    href={`${API}/sports/letter/${item.id}`}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Letter
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminSportsView;