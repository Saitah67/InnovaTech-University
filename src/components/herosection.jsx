import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: "90vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)"
        }}
      ></div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1 className="display-3 fw-bold">
          Welcome to InnovaTech University
        </h1>

        <p className="lead mt-3">
          Empowering Innovation, Knowledge & Excellence
        </p>


        <div className="mt-4 row">
          <div className="col-md-6">
            <Link className="btn btn-warning ms-3" to="/apply"><button className="btn btn-warning btn-lg me-3">
              Apply Now
            </button></Link>
          </div>     
        
          <div className="col-md-6">

            <Link className="nav-link" to="/programs"><button className="btn btn-outline-light btn-lg">
              Explore Programs
            </button></Link>
          </div>
        </div>    

      </div>
    </div>
  );
};

export default Hero;