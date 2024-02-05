import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const AuthModal = ({ handleClose, isOpen }) => {
  const [showLogin, setShowLogin] = useState(true);

  const closeButtonStyle = {
    padding: "10px 20px",
    marginBottom: 5,
    backgroundColor: "red",
    color: "black",
    fontSize: "36px",
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 1,
  };

  const modalDialogStyle = {
    width: "100%",
    maxWidth: "600px",
  };

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div
      className={`modal bd-example-modal-lg ${isOpen ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={modalDialogStyle}
      >
        <div className="modal-content">
          <button
            type="button"
            className="close "
            onClick={handleClose}
            style={closeButtonStyle}
          >
            <span>&times;</span>
          </button>

          <div className="modal-body p-0">
            {showLogin ? (
              <Login closeModal={handleClose} toggleForm={handleToggleForm} />
            ) : (
              <Register
                closeModal={handleClose}
                toggleForm={handleToggleForm}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
