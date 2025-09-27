import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      {/* Header */}
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom sticky-top navbar bg-dark">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
          >
            <i
              className="fa-solid fa-book fa-2xl"
              style={{ color: "#74C0FC" }}
            ></i>
            <span className="ms-2 fs-4">bookstore</span>
          </a>
        </div>
        <ul className="nav position-sticky col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Book" className="nav-link px-2">
              Book
            </Link>
          </li>
          <li>
            <Link to="/Team" className="nav-link px-2">
              Team
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-link px-2">
              Contact
            </Link>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Register
          </button>
        </div>
      </header>
      <Outlet />
      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <div className="row row-cols-md-4 justify-content-center border-top pt-4">
            <div id="contact" className="col-md-4 mb-0">
              <h5 className="text-primary">Contact Us</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ color: "#74C0FC" }}
                    ></i>
                    <span className="ms-2">Jalan raya</span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    <i
                      class="fa-solid fa-phone"
                      style={{ color: "#74C0FC" }}
                    ></i>
                    <span className="ms-2">Call +6281234567</span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    <i
                      class="fa-solid fa-envelope"
                      style={{ color: "#74C0FC" }}
                    ></i>
                    <span className="ms-2">book@gmail.com</span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    <i
                      class="fa-brands fa-square-instagram"
                      style={{ color: "#74C0FC" }}
                    ></i>
                    <span className="ms-2">BookStore</span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    <i
                      class="fa-brands fa-tiktok"
                      style={{ color: "#74C0FC" }}
                    ></i>
                    <span className="ms-2">BookStore</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 d-flex flex-column align-items-center justify-content-center mb-3 mb-md-0 me-md-auto">
              <h5 className="text-primary">About Us</h5>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                exercitationem necessitatibus quos tempore illo inventore porro
                dolorum beatae veritatis maxime!
              </p>
            </div>

            <div className="col-md-4 justify-content-end">
              <h5 className="text-primary d-flex justify-content-end">
                Link Penting
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 d-flex justify-content-end">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2 d-flex justify-content-end">
                  <a href="#book" className="nav-link p-0 text-body-secondary">
                    Book
                  </a>
                </li>
                <li className="nav-item mb-2 d-flex justify-content-end">
                  <a href="#team" className="nav-link p-0 text-body-secondary">
                    Team
                  </a>
                </li>
                <li className="nav-item mb-2 d-flex justify-content-end">
                  <a
                    href="#contact"
                    className="nav-link p-0 text-body-secondary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-body-secondary">
            &copy; 2025 NF Academy
          </p>
        </footer>
      </div>
    </>
  );
}

export default RootLayout;
