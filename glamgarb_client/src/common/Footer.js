import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start container-footer">
      <section className="d-flex justify-content-between p-4 bg-warning">
        <div className="me-5">
          <span className=" fw-bold">Get connected with us on social networks:</span>
        </div>
        <div>
        {/*  eslint-disable-next-line */}
          <a href="" className="social-icons me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" className="social-icons me-4">
            <i className="fab fa-google"></i>
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" className="social-icons me-4">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>

      <section className="bg-dark text-white pt-1">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">GlamGarb</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              GlamGarb is your ultimate destination for trendy and fashionable
              clothing. We offer a wide range of high-quality apparel for
              men, women, and kids, curated to enhance your style and
              confidence.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Women</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              // "../pages/women/wAllProducts.html" 
              className="f-links">All Products</a>
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              // "../pages/women/wDresses.html" 
              className="f-links">Dresses</a>
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              // "../pages/women/wPants.html" 
              className="f-links">Pants</a>
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              // "../pages/women/wSkirts.html" 
              className="f-links">Skirts</a>
            </p>
          </div>

          {/* Repeat similar structures for Men, Kids, and Links sections */}

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              // "../index.html" 
              className="f-links">Home</a>
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              // "../pages/login.html" 
              className="f-links">Login</a>
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              // "../pages/contact.html" 
              className="f-links">Contact</a>
            </p>
          </div>
        </div>
      </section>

      <div className="text-center p-3 f-copyRight">
        <b>Copyright © glamgarbclothing 2023</b>
      </div>
    </footer>
  );
};

export default Footer;
