function Contact() {
  return (
    <>
      {/* contact */}
      <section id="contact-hero" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Contact Us</h1>
            <p className="lead text-body-secondary">
              Kami senang mendengar dari Anda. Hubungi kami melalui salah satu
              platform di bawah ini atau kunjungi lokasi kami.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 py-5">
        <div className="row gx-5 gy-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold text-body-emphasis mb-3">Location</h2>
            <div className="ratio ratio-4x3 rounded-3 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.270082892343!2d106.81356918715821!3d-6.3529244999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec6b07b68ea5%3A0x17da46bdf9308386!2sSTT%20Terpadu%20Nurul%20Fikri%20-%20Kampus%20B!5e0!3m2!1sen!2sid!4v1758978259417!5m2!1sen!2sid"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6">
            <h2 className="fw-bold text-body-emphasis mb-4">Get in Touch</h2>
            <div className="d-flex flex-column gap-4">
              <a
                href="#"
                className="d-flex align-items-center text-decoration-none text-body"
              >
                <i
                  className="fa-brands fa-instagram fa-2xl me-3"
                  style={{ color: "#E1306C", width: "32px" }}
                ></i>
                <h5 className="fw-semibold mb-0">@Bookstore</h5>
              </a>

              <a
                href="#"
                className="d-flex align-items-center text-decoration-none text-body"
              >
                <i
                  className="fa-brands fa-tiktok fa-2xl me-3"
                  style={{ color: "#000000", width: "32px" }}
                ></i>
                <h5 className="fw-semibold mb-0">@BookstoreOfficial</h5>
              </a>

              <a
                href="mailto:BookstoreID@gmail.com"
                className="d-flex align-items-center text-decoration-none text-body"
              >
                <i
                  className="fa-regular fa-envelope fa-2xl me-3"
                  style={{ color: "#6c757d", width: "32px" }}
                ></i>
                <h5 className="fw-semibold mb-0">BookstoreID@gmail.com</h5>
              </a>

              <a
                href="tel:+62812345678"
                className="d-flex align-items-center text-decoration-none text-body"
              >
                <i
                  className="fa-solid fa-phone fa-2xl me-3"
                  style={{ color: "#198754", width: "32px" }}
                ></i>
                <h5 className="fw-semibold mb-0">+62 812-3456-7890</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
