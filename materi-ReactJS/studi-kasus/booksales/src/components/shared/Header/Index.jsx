import { Link, NavLink } from "react-router-dom";
import "../../../styles/Index.css"

export default function Header() {
  return (
    <>
      <header className="py-3 px-4 mb-4 border-bottom sticky-top bg-light">
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
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
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/" className="nav-link px-2">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Book" className="nav-link px-2">
                Book
              </NavLink>
            </li>
            <li>
              <NavLink to="/Team" className="nav-link px-2">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="nav-link px-2">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <Link to="/login">
              <button type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button type="button" className="btn btn-primary">
                Register
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}