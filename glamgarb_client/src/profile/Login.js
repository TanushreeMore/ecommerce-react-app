//profile/Login.js
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../State/Auth/authAction";

const Login = ({ closeModal, toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Combined state for success and validation messages
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData))
      .then(() => {
        setMessage("Login successful");
        closeModal();
        clearForm();
        setTimeout(() => {
          setMessage("");
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        setMessage("Invalid email or password");
        console.error("Login error:", error);
        setTimeout(() => {
          setMessage("");
          clearForm();
        }, 1000);
      });

    // axios
    //   .post("http://localhost:3002/api/user/login", {
    //     email,
    //     password,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //     if (result.data === "Success") {
    //       navigate("/");
    //     } else {
    //       console.log("All fields are required");
    //       setValidationMessage("All fields are required"); // Set validation message

    //       // Clear all fields when validation message appears
    //       setEmail("");
    //       setPassword("");

    //       return;
    //     }

    //     // Clear validation message if all fields are filled
    //     setValidationMessage("");
    //     setEmail("");
    //     setPassword("");
    //   })
    //   .catch((err) => console.log(err));
  };
  const clearForm = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="card rounded-5 shadow-lg text-black">
        <div className="card-body p-md-5 mx-md-4">
          <div className="mb-4">
            <h3 className="card-title text-center">&mdash; LOGIN &mdash;</h3>
          </div>
          <div id="error"></div>

          {/* Bootstrap alert for success or validation message */}
          {message && (
            <div
              className={`alert ${
                message.includes("successful")
                  ? "alert-success"
                  : "alert-danger"
              }`}
              role="alert"
            >
              {message}
            </div>
          )}

          {/* Form for user login */}
          <form id="form" onSubmit={handleSubmit}>
            <p>Please login to your account</p>
            <div className="form-outline mb-4">
              <input
                type="email"
                id="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="form-label" htmlFor="form2Example11">
                Email
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="form-label" htmlFor="form2Example22">
                Password
              </label>
            </div>

            <div className="text-center pt-1 mb-5 pb-1">
              <button
                className="btn btn-dark btn-block gradient-custom-2 mb-3"
                type="submit"
              >
                Log in
              </button>
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-center pb-4">
              <p className="mb-0 me-2">Don't have an account?</p>
              <button
                type="button"
                className="btn btn-outline-warning text-info fw-bold"
                onClick={toggleForm}
              >
                Create new
              </button>
            </div>
{/* temp */}
            <div className="text-danger fw-bolder text-center">
              <a href="/admin">(temporary link to go dashboard)</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
