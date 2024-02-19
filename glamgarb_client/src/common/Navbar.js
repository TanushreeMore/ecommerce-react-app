import { Link } from "react-router-dom";

// Create a functional component for the Navbar
const Navbar = () => {

    return (
      <>
        {/* Nav bar */}
        <section className="bg-dark border-dark">
          <div className="container">
            <nav className="navbar navbar-expand-lg py-lg-0 navbar-dark bg-dark nav-menu">
              <div className="container-fluid">
                {/* Nav menu toggle button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav nav-color">
                    {/* Nav items */}
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">
                        Home <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/admin">
                        Dashboard <span className="sr-only"></span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/productlist">
                        Products List
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/allproducts">
                        Products
                      </Link>
                    </li>
                    {/* Dropdowns for Women, Men, and Kids */}
                    {/* (Note: Using unique IDs for each dropdown) */}
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="#" id="womenDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Women
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="womenDropdown">
                        <Link className="dropdown-item" to="#">
                          {/* ../pages/women/wAllProducts.html */}
                        All Products</Link>
                        <Link className="dropdown-item" to="#">
                          {/* ../pages/women/wDresses.html */}
                          Dresses</Link>
                        <div className="dropdown-item"></div>
                        <Link className="dropdown-item" to="#">
                          {/* ../pages/women/wPants.html */}
                          Pants</Link>
                        <div className="dropdown-item"></div>
                        <Link className="dropdown-item" to="#">
                          {/* ../pages/women/wSkirts.html */}
                          Skirts</Link>
                      </div>
                    </li>
                    {/* (Repeat similar structure for Men and Kids) */}
                    {/* ... */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </>
    );
  };
  

export default Navbar;