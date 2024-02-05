import React from "react";
import Rating from "./Ratings";
import'./productDetails.css';

const ProductReview = () => {
  return (
    <div className="my-4">
      <div className="row g-3">

        <div className="col-1" xs={1}>
          <div className="ms-3 rounded-5 text-center text-white fw-bolder reviewImg"
            // style={{ height: 56, width: 56, backgroundColor: "#D63484", fontSize: 35, }}
            >
              T
          {/* <img
            src="placeholder-image.jpg"  // Replace with the path to your image
            alt="T"
            roundedCircle
          /> */}
          </div>
        </div>

        <div className="col-11" xs={9}>
          <div className="mx-5">
            <div>
              <p className="fw-bold h4  ">Tanu</p>
              <p className="opacity-50 h5  ">January 11, 2024</p>
            </div>
          </div>
          <div className="mx-5">
            <div className="align-items-center">
              <Rating />
            </div>
            <p>Nice Product, I loved it!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
