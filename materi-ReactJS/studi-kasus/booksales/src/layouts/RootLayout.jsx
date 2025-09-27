import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  // Kita ganti Fragment <> menjadi <div> agar bisa diberi class
  // d-flex: Mengaktifkan Flexbox
  // flex-column: Mengatur arahnya menjadi vertikal (kolom)
  // min-vh-100: Memberi tinggi minimal 100% dari tinggi viewport (layar)
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
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
                Contact Us
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
        </div>
      </header>

      {/* Bagian terpenting kedua: flex-grow-1 */}
      {/* Kelas ini memberitahu <main> untuk "tumbuh" dan mengisi semua ruang kosong yang tersedia */}
      <main className="container flex-grow-1">
        <Outlet />
      </main>

      {/* Footer */}
      {/* Kita tambahkan class mt-auto (margin-top: auto) sebagai pengaman tambahan,
          tapi flex-grow-1 di <main> adalah yang utama */}
      <div className="container mt-auto">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-body-secondary">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Book" className="nav-link px-2 text-body-secondary">
                Book
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Team" className="nav-link px-2 text-body-secondary">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link px-2 text-body-secondary">
                Contact
              </Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary">
            &copy; 2025 Company, Inc
          </p>
        </footer>
      </div>
    </div>
  );
}

export default RootLayout;