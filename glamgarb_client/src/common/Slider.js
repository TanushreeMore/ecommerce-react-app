import React from "react";
import "../css/slider.css";
import { useNavigate } from "react-router-dom";

const Slider = ({ sliderData }) => {

  const navigate= useNavigate();
  const handleAddToCart = () => {
    navigate("/productlist")
  }
  
  return (
    <>
      {/* Bootstrap Carousel */}
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        {/* Swiper Wrapper for Cards */}
        <div className="cards-wrapper swiper-wrapper">
          {/* Carousel Inner */}
          <div className="carousel-inner">
            {/* Map through homeData to create carousel items */}
            {sliderData && sliderData.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                {/* Card component */}
                <div className="card swiper-slide" key={index}>
                  {/* Image Content */}
                  <div className="image-content">
                    <span className="overlay"></span>
                    {/* Card Image */}
                    <div className="card-image">
                      <img src={item.img} alt="" className="card-img" width={250} height={250} />
                    </div>
                    {/* Card Content */}
                    <div className="card-content">
                      <h2 className="title">{item.title}</h2>
                      <p className="description">
                        {item.description}
                        <br />
                        <b>Price:</b> ₹499.99.
                      </p>
                      {/* Add to Cart Button */}
                      <button onClick={handleAddToCart} className="btn btn-dark">Go for More</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Navigation Controls */}
          <a
            className="swiper-button-prev swiper-navBtn"
            // "carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="swiper-button-next swiper-navBtn"
            // "carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          {/* <div className="swiper-pagination swiper-navBullet"></div> */}
        </div>
      </div>
    </>
  );
};

export default Slider;