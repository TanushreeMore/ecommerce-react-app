// ProductList.js
import React, { useEffect, useState } from "react";
// import Rating from "../Ratings";
import ProductDetails from "./ProductDetails/ProductDetails";
import "./product.css";
import Rating from "./ProductDetails/Ratings";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../State/Product/productAction";

// Define the initial state
// const initialState = {
//   products: [],
//   loading: true,
//   error: null,
// };

// Define the reducer function
// const productReducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_PRODUCTS_SUCCESS":
//       return {
//         ...state,
//         products: action.payload,
//         loading: false,
//         error: null,
//       };
//     case "FETCH_PRODUCTS_FAILURE":
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { products, loading, error } = useSelector((state) => state.product); // Use useSelector to get products from the Redux store

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageNumber = searchParams.get("page") || 1;

    // Dispatch the action to fetch products for the current page
    dispatch(findProducts(pageNumber));
  }, [dispatch, location.search]);

  // to check the structure of the products state
  console.log("Products state:", products);

  const handleAddToCart = () => {
    navigate("/cart");
  };

  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
    // Use the navigate function to redirect to the ProductDetails page
    navigate(`/product/${productId}`);
  };

  // Pagination logic
  const handlePaginationChange = (value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", value || 1); // Set to 1 if value is undefined
    navigate({ search: searchParams.toString() });
  };

  return (
    <>
      <div className="container">
        <h3 className="card-title text-center my-5">
          &mdash; PRODUCTS LIST &mdash;
        </h3>
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            products?.content?.map((item, index) => (
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
                        src={item.imageUrl}
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
                        <b>Price:</b> ₹{item.price}
                      </p>
                      <br />
                      {/* Pass rating and number of reviews as props */}
                      <div>
                        {/* Bootstrap Rating */}
                        <Rating />
                      </div>
                      {/* <Rating /> */}
                      {/* Add to Cart Button */}
                      <button
                        onClick={handleAddToCart}
                        variant="contained"
                        className="btn btn-dark"
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {selectedProduct && <ProductDetails productId={selectedProduct} />}

      {/* Pagination */}
      <section>
        <div className="px-4 py-5 d-flex justify-content-center ">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
               {/* eslint-disable-next-line */}
                <a 
                  className="page-link" 
                  href="#" 
                  aria-label="Previous"
                  onClick={() => handlePaginationChange(products.currentPage - 1)}
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              
              {[...Array(products.totalPages).keys()].map((page) => (
                <li key={page} className="page-item">
                  {/* eslint-disable-next-line */}
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => handlePaginationChange(page + 1)}
                  >
                    {page + 1}
                  </a>
                </li>
              ))}
              <li className="page-item">
              {/* eslint-disable-next-line */}
                <a
                  className="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={() => handlePaginationChange(products.currentPage + 1)}
                >
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default ProductList;