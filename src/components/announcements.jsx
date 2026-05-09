import React, { useEffect, useState } from "react";
import axios from "axios";

const Announcements = () => {

  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = "https://vincentfungo.alwaysdata.net/api/university";

  // FETCH ANNOUNCEMENTS
  useEffect(() => {

    axios.get(`${API}/announcements`)
      .then((res) => {

        console.log("ANNOUNCEMENTS:", res.data);

        setAnnouncements(res.data);

      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  return (
    <div>

      {/* HERO SECTION */}
      <div className="bg-dark text-white text-center py-5">

        <h1 className="fw-bold">
          University Announcements
        </h1>

        <p className="lead">
          Stay updated with the latest news and updates
        </p>

      </div>

      {/* CONTENT */}
      <div className="container my-5">

        {/* LOADING */}
        {loading && (
          <div className="text-center">
            <h5>Loading announcements...</h5>
          </div>
        )}

        {/* NO ANNOUNCEMENTS */}
        {!loading && announcements.length === 0 && (
          <div className="alert alert-warning text-center">
            No announcements available
          </div>
        )}

        {/* ANNOUNCEMENTS */}
        <div className="row">

          {announcements.map((item) => (

            <div className="col-md-6 mb-4" key={item.id}>

              <div className="card shadow border-0 h-100">

                <div className="card-body">

                  {/* CATEGORY */}
                  <span className="badge bg-primary mb-2">
                    {item.category}
                  </span>

                  {/* TITLE */}
                  <h4 className="fw-bold">
                    {item.title}
                  </h4>

                  {/* MESSAGE */}
                  <p className="text-muted">
                    {item.message}
                  </p>

                </div>

                {/* FOOTER */}
                <div className="card-footer bg-white border-0">

                  <small className="text-muted">

                    Posted on{" "}
                    {item.created_at
                      ? new Date(item.created_at).toLocaleDateString()
                      : "Recently"}

                  </small>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Announcements;