import React, { useState } from "react";
import { Link } from "react-router-dom";
// import MyLogo from "/imgs/black_log.png";
import ProfileIcon from "../profile/ProfileIcon";
import AuthModal from "../profile/AuthModal";
import Login from "../profile/Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../State/Auth/authAction";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Implement search functionality here, such as sending API request or filtering data
    console.log("Search query:", searchQuery);
    // Reset search input
    setSearchQuery("");
  };

  return (
    <>
      {/* Top bar */}
      <section className="bg-warning container-fluid">
        <div className="row top-bar">
          {/* Logo */}
          <div className="col text-left">
            <span className="text-black-50">
              <img className="hImg" src="/imgs/black_log.png" alt="logo" />
            </span>
          </div>

          {/* Search box */}
          {/* <div className="col mt-5 text-center">
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
          </div> */}
          <div className="col mt-5 text-center">
            <form className="form-inline" onSubmit={handleFormSubmit}>
              <input
                className="form-control mr-sm-2 w-75"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
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

          {/* Login */}
          <div className="col mt-5 login-cart d-inline-flex justify-content-end">
            {isAuthenticated ? (
              <ProfileIcon
                onLogout={handleLogout}
                userFirstName={user?.firstName || ""}
              />
            ) : (
              <span>
                <button
                  type="button"
                  className="btn btn-dark mr-sm-2 "
                  // d-none d-sm-block"
                  onClick={openModal}
                >
                  <span style={{ textDecoration: "none", color: "white" }}>
                    Login
                  </span>
                </button>
                <AuthModal isOpen={isModalOpen} handleClose={closeModal}>
                  <Login
                    closeModal={closeModal}
                    toggleForm={() => {}}
                    // onLoginSuccess={() => closeModal()}
                  />
                </AuthModal>
              </span>
            )}

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
