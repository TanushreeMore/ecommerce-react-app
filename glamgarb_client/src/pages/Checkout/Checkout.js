import React, { useEffect, useState } from "react";
import Login from "../../profile/Login";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummary from "./OrderSummary";
import "./Stepper.css"; // Import your custom styles
import Register from "../../profile/Register";

const Checkout = () => {
    // Retrieve the active step from local storage on component mount
    const [active, setActive] = useState(() => {
      const storedActiveStep = localStorage.getItem('activeStep');
      return storedActiveStep ? parseInt(storedActiveStep, 10) : 1;
    });
  
    // Update the active step in local storage whenever it changes
    useEffect(() => {
      localStorage.setItem('activeStep', active.toString());
    }, [active]);

  const handleNextPrevClick = (step) => {
    // Validate the step range (1 to 4)
    if (step >= 1 && step <= 4) {
      setActive(step);
    }
  };

  return (
    <div className="stepper-container">
      <div className="stepper mt-3">
        <div
          className={`step ${active === 1 ? "active" : ""}`}
          onClick={() => handleNextPrevClick(1)}
        >
          Login
        </div>
        <div
          className={`step ${active === 2 ? "active" : ""}`}
          onClick={() => handleNextPrevClick(2)}
        >
          Delivery Address
        </div>
        <div
          className={`step ${active === 3 ? "active" : ""}`}
          onClick={() => handleNextPrevClick(3)}
        >
          Order Summary
        </div>
        <div
          className={`step ${active === 4 ? "active" : ""}`}
          onClick={() => handleNextPrevClick(4)}
        >
          Payment
        </div>
      </div>

      <div className="step-content">
        {/* Render content based on the active step */}
        {active === 1 && <Step1 handleNextPrevClick={handleNextPrevClick} />}
        {active === 2 && <Step2 handleNextPrevClick={handleNextPrevClick} />}
        {active === 3 && <Step3 handleNextPrevClick={handleNextPrevClick} />}
        {active === 4 && <Step4 handleNextPrevClick={handleNextPrevClick} />}
      </div>
    </div>
  );
};

const Step1 = ({ handleNextPrevClick }) => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="step-container">
      <h1 className="text-center mb-4">
        {showLoginForm ? "Login" : "Register"}
      </h1>
      {showLoginForm ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Register toggleForm={toggleForm} />
      )}
      <div className="mt-3 text-center my-4">
        <button
          className="btn btn-dark text-uppercase"
          onClick={() => handleNextPrevClick(2)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step2 = ({ handleNextPrevClick }) => {
  return (
    <div className="step-container">
      <h1 className="text-center mb-4">Delivery Address</h1>
      <DeliveryAddressForm />
      <div className="mt-3 text-center my-4">
        <button
          className="btn btn-dark text-uppercase me-3"
          onClick={() => handleNextPrevClick(1)}
        >
          Previous
        </button>
        <button
          className="btn btn-dark text-uppercase"
          onClick={() => handleNextPrevClick(3)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step3 = ({ handleNextPrevClick }) => {
  return (
    <div className="step-container">
      <h1 className="text-center mb-4">Order Summary</h1>
      <OrderSummary />
      <div className="mt-3 text-center my-4">
        <button
          className="btn btn-dark text-uppercase me-3"
          onClick={() => handleNextPrevClick(2)}
        >
          Previous
        </button>
        <button
          className="btn btn-dark text-uppercase"
          onClick={() => handleNextPrevClick(4)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step4 = ({ handleNextPrevClick }) => {
  return (
    <div className="step-container">
      <h1 className="text-center mb-4">Payment</h1>
      
      <div style={{ fontSize: '25px', textAlign: 'center', marginTop: '45px' }}>
                Congratulations! Your Has Been Done Successfully.
                <span style={{ fontSize: '50px', display: 'block' }} role="img" aria-label="image">
                  🎉
                </span>
              </div> 
      
      <div className="mt-3 text-center my-4">
        <button
          className="btn btn-dark text-uppercase me-3"
          onClick={() => handleNextPrevClick(3)}
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default Checkout;
