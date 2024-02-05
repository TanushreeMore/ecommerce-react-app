//profile/Register.js
import React, { useEffect, useState } from "react"; 
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { getUser, register } from "../State/Auth/authAction";

const Register = ({closeModal, toggleForm}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState(""); // Added state for validation message
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const auth  = useSelector((store) => store.auth);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check for empty fields
    if (!firstName || !lastName || !email || !password) {
      setValidationMessage("All fields are required");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };
    
      // Dispatch the registration action
      dispatch(register(userData));
      console.log("dispatch", userData);

        // Store user data in localStorage
        localStorage.setItem("userData - localstorage", JSON.stringify(userData));
        
        navigate("/login");
        
        // Clear form fields and validation message
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setValidationMessage("");

    // axios
    //   .post("http://localhost:3002/api/user/register", {
    //     firstName,
    //     lastName,
    //     email,
    //     password,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //     navigate("/login");
    //   })
    //   .catch((err) => console.log(err));
 
    closeModal(); 
  
  };

  return (
    <>
              <div className="card rounded-5 shadow-lg  text-black">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="mb-4">
                    <h3 className="card-title text-center">
                      &mdash; REGISTRATION FORM &mdash;
                    </h3>
                  </div>
                  {/* <div id="error"></div> */}
                  {/* Bootstrap alert for validation message */}
                  {validationMessage && (
                    <div className="alert alert-danger" role="alert">
                      {validationMessage}
                    </div>
                  )}

                  {/* Form for user registration */}
                  <form
                    id="form"
                    onSubmit={handleSubmit}
                  >
                    {/* First Name */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example11">
                        First Name :
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="form-control"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    {/* Last Name */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example11">
                        Last Name :
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="form-control"
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                    {/* email */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example11">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    {/* password */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example22">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    {/* Submit button */}
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button
                        className="btn btn-dark btn-block gradient-custom-2 mb-3"
                        type="submit"
                      >
                        Create Account
                      </button>
                      <a className="text-muted" href="#!">
                        Forgot password?
                      </a>
                    </div>
                    <div className="my-4">
                      <h6 className="text-muted text-center">--- OR ---</h6>
                    </div>

                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Already have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-warning text-info fw-bold" 
                            onClick={toggleForm}
                          >
                              Sign In
                          </button>
                    </div>
                  </form>
                </div>
              </div>
    </>
  );
};

export default Register;