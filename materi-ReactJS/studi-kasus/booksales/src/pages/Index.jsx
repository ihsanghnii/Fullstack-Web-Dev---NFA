import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa.
            </h1>
            <p className="lead">
              Cara mudah dan terbukti untuk membentuk kebiasaan baik dan
              menghilangkan kebiasaan buruk
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Detail
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 shadow-lg mb-5 mx-4">
            <img
              className="rounded-lg-3"
              src="https://picsum.photos/450/600"
              alt=""
              width="100%"
            />
          </div>
        </div>
      </div>

      {/* Best Seller */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Buku-buku dengan rating tinggi dan ulasan terbaik. Buku-buku ini
              konsisten jadi sorotan, cocok untuk kamu yang mau baca bagus tanpa
              ribet memilih.
            </p>
            <p>
              <a href="#best-seller" className="btn btn-primary my-2 m-2">
                View
              </a>
              <Link to="/Book" className="btn btn-secondary my-2">
                Other Book
              </Link>
            </p>
          </div>
        </div>
      </section>
      <div id="best-seller" className="album py-5 bg-body-tertiary">
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
                  <h5>Buku 1</h5>
                  <p className="card-text">
                    Buku ini berisi tentang Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dolorum voluptatibus beatae
                    maiores ducimus tempora nobis iste porro minima similique
                    consectetur!
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                    </div>
                  </div>
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
                  <h5>Buku 2</h5>
                  <p className="card-text">
                    Buku ini berisi tentang Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dolorum voluptatibus beatae
                    maiores ducimus tempora nobis iste porro minima similique
                    consectetur!
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                    </div>
                  </div>
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
                  <h5>Buku 3</h5>
                  <p className="card-text">
                    Buku ini berisi tentang Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dolorum voluptatibus beatae
                    maiores ducimus tempora nobis iste porro minima similique
                    consectetur!
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                    </div>
                  </div>
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
                  <h5>Buku 4</h5>
                  <p className="card-text">
                    Buku ini berisi tentang Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dolorum voluptatibus beatae
                    maiores ducimus tempora nobis iste porro minima similique
                    consectetur!
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;