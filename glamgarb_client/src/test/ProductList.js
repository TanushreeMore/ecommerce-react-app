// ProductList.js
import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
// import Rating from "../Ratings";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductReview from "./ProductDetails/ProductReview";
import "./product.css";
import Rating from "./ProductDetails/Ratings";
import { useNavigate } from "react-router-dom";



// Define the initial state
const initialState = {
  products: [],
  loading: true,
  error: null,
};

// Define the reducer function
const productReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const ProductList = () => {
  // Use useReducer hook to manage state
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate= useNavigate();
  const handleAddToCart = () => {
    navigate("/cart")
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3002/api/products");
        // Dispatch an action on successful fetch
        dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
      } catch (error) {
        // Dispatch an action on fetch failure
        dispatch({
          type: "FETCH_PRODUCTS_FAILURE",
          payload: "Error fetching products",
        });
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
  };

  return (
    <>
      <div className="container">
        <h3 className="card-title text-center my-5">
          &mdash; PRODUCTS LIST &mdash;
        </h3>
        {/* for tiral only
         <ProductReview /> */}
        <div className="row">
          {state.products.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 my-3"
              onClick={() => handleProductClick(item._id)}
            >
              <div className="card product-card box-shadow py py-sm-3">
                <div className="image-content">
                  <span className="overlay"></span>
                  {/* Card Image */}
                  <div className="card-image">
                    <img
                      src={item.img}
                      alt=""
                      className="img-card card-img"
                      width={250}
                      height={250}
                    />
                  </div>
                  {/* Card Content */}
                  <div className="card-content text-part">
                    <h2 className="title card-title titles">{item.title}</h2>
                    <p className="description">
                      {item.description}
                      <br />
                      <b>Price:</b> ₹499.99.
                    </p>
                    <br />
                    {/* Pass rating and number of reviews as props */}
                    <div>
                      {/* Bootstrap Rating */}
                      <Rating />
                    </div>
                    {/* <Rating /> */}
                    {/* Add to Cart Button */}
                    <button onClick={handleAddToCart} variant="contained" className="btn btn-dark">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && <ProductDetails productId={selectedProduct} />}
    </>
  );
};

export default ProductList;
