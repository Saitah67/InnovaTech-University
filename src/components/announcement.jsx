import React, { useEffect, useState } from "react";
import axios from "axios";

const Announcements = () => {

  const [announcements, setAnnouncements] = useState([]);

  const API = "https://vincentfungo.alwaysdata.net/api/university";

  useEffect(() => {
    axios.get(`${API}/announcements`)
      .then((res) => {
        console.log("DATA FROM API:", res.data); // debug
        setAnnouncements(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const featured = announcements[0];
  const others = announcements.slice(1);

  return (
    <div className="container my-5">

      <h2 className="text-center fw-bold mb-3">
        Latest Announcements
      </h2>

      <div className="row g-4">

        {/* FEATURED */}
        {featured && (
          <div className="col-md-6">
            <div className="card shadow-lg border-0 p-3 h-100">

              <span className="badge bg-danger mb-2">Featured</span>

              <h4>{featured.title}</h4>

              {/* IMPORTANT FIX */}
              <p className="text-muted">
                {featured.message}
              </p>

              <div className="d-flex justify-content-between mt-3">
                <span className="badge bg-primary">
                  {featured.category}
                </span>

                <small>
                  {new Date(featured.created_at).toLocaleDateString()}
                </small>
              </div>

            </div>
          </div>
        )}

        {/* OTHERS */}
        <div className="col-md-6">

          {others.map((item) => (
            <div key={item.id} className="card mb-3 p-3 shadow-sm">

              <h5>{item.title}</h5>

              {/* IMPORTANT FIX */}
              <p className="text-muted mb-1">
                {item.message}
              </p>

              <div className="d-flex justify-content-between">
                <span className="badge bg-success">
                  {item.category}
                </span>

                <small>
                  {new Date(item.created_at).toLocaleDateString()}
                </small>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Announcements;