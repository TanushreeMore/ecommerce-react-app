import React from "react";
import "./orderCard.css";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={navigate(`/account/order/${3}`)}
      className="p-5 shadow border my-3 shadow custom-hover"
    >
      <div className="row">
        <div className="col-6">
          <div className="orderCardImgSection">
            {/* d-flex pointer w-5rem h-5rem overflow-hidden */}
            <div>
              <img
                className="orderCardImg"
                // 'w-100 h-100 object-fit-cover'
                src="https://images.unsplash.com/photo-1552664199-fd31f7431a55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                alt=""
              />
            </div>

            <div className="ms-5 my-2">
              <p className="">Men Slim Mid Black Jeans</p>
              <p className="opacity-50 fw-semibold text-sm">Size : M</p>
              <p className="opacity-50 fw-semibold text-sm">Color : Black</p>
            </div>
          </div>
        </div>

        <div className="col-2">
          ₹<p>1099</p>
        </div>

        <div className="col-4">
          <p>
            <i className="fa-regular fa-circle-dot text-warning me-2 text-sm fw-bold "></i>
            <span>Expectedd Delivery On February 28</span>
          </p>
          <small className="opacity-50 fw-semibold text-muted text-sm">
            Your Item Has Been Delivered.
          </small>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
