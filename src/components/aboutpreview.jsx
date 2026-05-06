import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <div className="container my-5 ">
      <div className="row align-items-center">
        
        {/* Text Section */}
        <div className="col-md-6 program-card" data-aos="fade-right">
          <h2 className="fw-bold">About InnovaTech University</h2>
          <p className="mt-3">
            InnovaTech University is a leading institution dedicated to
            excellence in education, research, and innovation. We empower
            students with the skills and knowledge needed to succeed in a
            rapidly evolving world.
          </p>

          <Link className="nav-link" to="/about"><button className="btn btn-dark mt-3">
            Learn More
          </button></Link>
        </div>

        {/* Image Section */}
        <div className="col-md-6 card shadow p-0 program-card" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            alt="University"
            className="img-fluid rounded"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutPreview;