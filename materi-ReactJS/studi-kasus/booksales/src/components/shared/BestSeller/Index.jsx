import { Link } from "react-router-dom";

export default function BestSeller() {
  return (
    <>
      {/* Judul */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Buku-buku dengan rating tinggi dan ulasan terbaik. Buku-buku ini
              paling banyak dibeli.
            </p>
            <p>
              <a href="#best-seller" className="btn btn-primary my-2 m-2">
                View
              </a>
              <Link to="/Book" className="btn btn-outline-primary my-2">
                Other Book
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Product List */}
      <div id="best-seller" className="album py-5">
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