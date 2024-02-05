import React from "react";
import Slider from "../common/Slider";
// import MyLogo from '../imgs/black_log.png'
// import MyBanner from './public/imgs/allproduct-banner.jpg'
import { Link, useNavigate } from "react-router-dom";
import {
  allWomenProductsData,
  allMenProductsData,
  allKidsProductsData,
} from "../json/allProductsData";

const AllProducts = () => {

  const navigate= useNavigate();
  const handleAddToCart = () => {
    navigate("/productlist")
  }
  return (
    <>
      {/* <!-- cover image --> */}
      <div className="container-img">
        <div
          className="banner"
          style={{
            backgroundImage:
              "https://images.unsplash.com/flagged/photo-1559502858-8041d0747820?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWFuJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww", //{MyBanner},
            backgroundSize: "100% 75%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="banner-text">
            <h2>LIMITED TIME OFFER</h2>
            <h1>SALE</h1>
            <button id="btn">SHOP NOW</button>
          </div>
        </div>
      </div>
      {/* <!-- cover image end --> */}
      {/* <!-- women-section --> */}
      <h3 className="text-center mb-4">&mdash; Women Section &mdash;</h3>
      <button onClick={handleAddToCart} className="btn btn-warning float-right text-dark">
          More...
      </button>
      <br />
      <br />
      <section className="slide-section mb-4 d-block">
        <div className="slide-container swiper">
          <div className="slide-content">
            <div className="card-wrapper swiper-wrapper">
              {/* Slider Component for Featured Products */}
              <Slider sliderData={allWomenProductsData} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- men-section --> */}
      <h3 className="text-center mb-4">&mdash; Men Section &mdash;</h3>
      <button onClick={handleAddToCart}  className="btn btn-warning text-dark float-right">
          More...
      </button>
      <br />
      <br />
      <section className="slide-section mb-4 d-block">
        <div className="slide-container swiper">
          <div className="slide-content">
            <div className="card-wrapper swiper-wrapper">
              {/* Slider Component for Featured Products */}
              <Slider sliderData={allMenProductsData} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- kids-section --> */}
      <h3 className="text-center mb-4">&mdash; Kids Section &mdash;</h3>
      <button  onClick={handleAddToCart} className="btn btn-warning float-right text-dark">
          More...
      </button>
      <br />
      <br />
      <section className="slide-section mb-4 d-block">
        <div className="slide-container swiper">
          <div className="slide-content">
            <div className="card-wrapper swiper-wrapper">
              {/* Slider Component for Featured Products */}
              <Slider sliderData={allKidsProductsData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
