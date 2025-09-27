function Team() {
  return (
    <>
      {/* Team */}
      <section id="team" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Our Team</h1>
            <p className="lead text-body-secondary">Let's meet our team</p>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3 justify-content-center">
            <div className="col">
              <div className="card shadow-sm">
                <img
                  className="bd-placeholder-img card-img-top"
                  src="https://picsum.photos/600/800"
                  alt=""
                  width="600"
                />
                <div className="card-body">
                  <h5>Muhammad Indika</h5>
                  <p className="card-text">Role dika</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  className="bd-placeholder-img card-img-top"
                  src="https://picsum.photos/600/800"
                  alt=""
                />
                <div className="card-body">
                  <h5>Ahmad Ghifari</h5>
                  <p className="card-text">Role ahmad</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  className="bd-placeholder-img card-img-top"
                  src="https://picsum.photos/600/800"
                  alt=""
                />
                <div className="card-body">
                  <h5>Ihsan Ghani</h5>
                  <p className="card-text">Role Ihsan</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  className="bd-placeholder-img card-img-top"
                  src="https://picsum.photos/600/800"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nabila Syifa</h5>
                  <p className="card-text">Role Nabila</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;