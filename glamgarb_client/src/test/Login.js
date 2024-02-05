//profile/Login.js
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../State/Auth/Action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState(""); // Added state for validation message
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

      // Dispatch the registration action
      dispatch(login(userData));
      console.log("dispatch", userData);

      navigate("/");
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
  return (
    <>
      <section
        className="h-100 gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="mb-4">
                        <h3 className="card-title text-center">
                          &mdash; LOGIN &mdash;
                        </h3>
                      </div>
                      <div id="error"></div>
                      
        {/* Bootstrap alert for validation message */}
        {validationMessage && (
          <div className="alert alert-danger" role="alert">
            {validationMessage}
          </div>
        )}

        {/* Form for user login */}
        <form onSubmit={handleSubmit}> {/* <form id="form" action="/" method="GET"> */}
                        <p>Please login to your account</p>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            // placeholder="Email address"
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example11"
                          >
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
                          <label
                            className="form-label"
                            htmlFor="form2Example22"
                          >
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
                            className="btn btn-outline-warning"
                          >
                            <Link
                              to="/register"
                              className="ms-1 text-info fw-bold"
                            >
                              Create new
                            </Link>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        At GlamGarb, we curate fashion that speaks volumes about
                        your style. Our passion lies in offering trendy,
                        high-quality clothing that empowers you to embrace your
                        individuality. Explore our collections and redefine your
                        fashion statement with GlamGarb.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
