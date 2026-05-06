const Statistics = () => {
  return (
    <div className="py-5 bg-dark text-white mb-5">

      <div className="container text-center">

        {/* Title */}
        <h2 className="fw-bold mb-2">
          University Statistics
        </h2>

        <p className="text-light mb-5">
          A quick overview of our academic excellence and community
        </p>

        <div className="row g-4">

          {/* Students */}
          <div className="col-md-3 col-6">
            <div className="p-4 stat-box data-aos='fade-up' data-aos-delay='100'">
              <h1 className="fw-bold text-warning">5,000+</h1>
              <p>Students</p>
            </div>
          </div>

          {/* Courses */}
          <div className="col-md-3 col-6">
            <div className="p-4 stat-box data-aos='fade-up' data-aos-delay='200'">
              <h1 className="fw-bold text-warning">15+</h1>
              <p>Courses</p>
            </div>
          </div>

          {/* Lecturers */}
          <div className="col-md-3 col-6">
            <div className="p-4 stat-box data-aos='fade-up' data-aos-delay='300'">
              <h1 className="fw-bold text-warning">150+</h1>
              <p>Lecturers</p>
            </div>
          </div>

          {/* Graduates */}
          <div className="col-md-3 col-6">
            <div className="p-4 stat-box data-aos='fade-up' data-aos-delay='400'">
              <h1 className="fw-bold text-warning">25,000+</h1>
              <p>Graduates</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Statistics;