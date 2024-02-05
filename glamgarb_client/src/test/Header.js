import React from "react";
import { Link } from "react-router-dom";
import MyLogo from "../imgs/black_log.png";
import ProfileIcon from "../profile/ProfileIcon";

// Create a functional component for the Header
const Header = ({ isAuthenticated }) => {

  return (
    <>
      {/* Top bar */}
      <section className="bg-warning container-fluid">
        <div className="row top-bar">
          {/* Logo */}
          <div className="col text-left">
            <span className="text-black-50">
              <img className="hImg" src={MyLogo} alt="logo" />
            </span>
          </div>
          {/* Search box */}
          <div className="col mt-5 text-center">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2 w-75"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <i className="fas fa-search mr-sm-2 d-sm-block d-lg-none d-md-block"></i>
              <button
                className="btn btn-dark my-2 my-sm-0 d-none d-lg-block d-md-none"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          {/* Login and Cart */}
          <div className="col mt-5 login-cart d-inline-flex justify-content-end">

            {/* {isAuthenticated ? (
              <ProfileIcon />
            ) : (
              <span>
                <button
                  type="button"
                  className="btn btn-dark mr-sm-2 d-none d-sm-block"
                  onClick={openModal}
                >
                  <span style={{ textDecoration: "none", color: "white" }}>
                    Login
                  </span>
                </button>
                <AuthModal isOpen={isModalOpen} closeModal={closeModal}>
                  <Login closeModal={closeModal} />
                </AuthModal>
              </span>
            )} */}

            {isAuthenticated ? (
          <ProfileIcon />
        ) : (
            <span>
              <button type="button" className="btn btn-dark mr-sm-2 d-none d-sm-block">
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                  Login
                </Link>
              </button>
            </span>
        )}

            {/* without authentication */}
            {/* <ProfileIcon />
            <span>
              <button type="button" className="btn btn-dark mr-sm-2 rounded-circle d-block d-sm-none">
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                  <i className="fa-solid fa-user" style={{ color: '#ffffff' }}></i>
                </Link>
              </button>
            </span> */}

            {/* Cart */}
            <span className="ml-1 mt-2">
              <Link to="/cart" className="cart mr-sm-2">
                <i className="fa-solid fa-cart-shopping fa-2xl"></i>
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
