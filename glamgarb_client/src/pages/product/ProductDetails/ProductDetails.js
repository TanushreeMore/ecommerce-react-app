import React, { useEffect, useState } from "react";
import "./productDetails.css";
import ProductReview from "./ProductReview";
import Rating from "./Ratings";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/productAction";
import { addItemToCart } from "../../../State/Cart/cartAction";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector(store => store.product); 
  console.log("Product Details:", product);
  console.log("Product-product:", product.product);
  const { loading, error } = useSelector((state) => state.product); // Get product details from the Redux store

  const productId = window.location.pathname.split("/").pop(); // Extract product ID from the URL
  console.log("Product ID:", productId);

  const handleAddToCart = () => {
    if (!selectedSize || !productId) {
      alert("Please select a size before adding to cart.");
      return;
    }

    dispatch(addItemToCart(productId, selectedSize, product.product));
    navigate("/cart");
    };

  // Fetch product details when the component mounts or when the productId changes
  useEffect(() => {
    const data = { productId: productId };
    dispatch(findProductsById(data));
  }, [dispatch, productId]);


  // useEffect(() => {
  //   const fetchProductDetails = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3002/api/products/${productId}`
  //       );
  //       setProduct(response.data);
  //     } catch (error) {
  //       console.error("Error fetching product details:", error);
  //     }
  //   };

  //   fetchProductDetails();
  // }, [productId]);

  // console.log("Product State:", product);

  return (
    <div className="">
      <div className="d-grid product-details-container m-5 p-5 shadow text-center align-content-center ">
        <div className="product-details">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : product && product?.product?.imageUrl ? (
            <>
              <div className="row">
                {/* img */}
                <div className="col-12 col-md-7">
                  <div className="productImage">
                    <img
                      src={product?.product?.imageUrl}
                      alt={product?.product?.title}
                      className="img-fluid"
                    />
                  </div>
                </div>

                {/* Product name and details */}
                <div className="col-12 col-md-5 justify-content-center mx-auto px-4 mt-5 ">
                  <div className="product-info">
                    <div className="card-title mt-5 ">
                      <h1 className="mb-4 product_name">{product?.product?.title}</h1>
                      <h6 className="my-2">{product?.product?.description}</h6>
                      <h6>
                        <b>Price:</b>
                        {product?.product?.discountedPrice}
                        {/* {product.price != null
                          ? `₹${product.price.toFixed(2)}`
                          : "N/A"} */}
                      </h6>
                      {/* Rating & Reviews */}
                      <div className="d-flex align-items-center gap-3">
                        <div className="mb-1">
                          <Rating />
                        </div>
                        <p className="ms-3 opacity-50 text-secondary mb-0">
                          56820 Ratings
                        </p>
                        <p className="ms-3 text-sm font-weight-medium textPrimary">
                          3870 Reviews
                        </p>
                      </div>
                    </div>{" "}
                    {/* product size */}
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <b className="text-uppercase">Size : </b>
                      <button
                        type="button"
                        className={`btn btn-warning fw-bolder fs-6 shadow-lg m-3 ${
                          selectedSize === "S" ? "active" : ""
                        }`}
                        onClick={() => setSelectedSize("S")}
                      >
                        S
                      </button>
                      <button
                        type="button"
                        className={`btn btn-warning fw-bolder fs-6 shadow-lg m-3 ${
                          selectedSize === "M" ? "active" : ""
                        }`}
                        onClick={() => setSelectedSize("M")}
                      >
                        M
                      </button>
                      <button
                        type="button"
                        className={`btn btn-warning fw-bolder fs-6 shadow-lg m-3 ${
                          selectedSize === "L" ? "active" : ""
                        }`}
                        onClick={() => setSelectedSize("L")}
                      >
                        L
                      </button>
                    </div>
                    
                    <div className="product-actions my-3 ">
                      {/* Add to Cart Button */}
                      <button
                        className="btn btn-dark"
                        onClick={handleAddToCart}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Product not found</p>
          )}

          {/* rating & reviews */}
          <section>
            <h1 className="h1 mt-5  fw-bolder fs-5 pb-4">
              Recent Rating & Review
            </h1>
            <div className="border p-4 mb-3  ">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="my-3">
                    <ProductReview />
                      {/* {[1, 1, 1].map((item) => (
                        <ProductReview key={item} />
                      ))} */}
                    </div>
                  </div>

                  <div className="col-md-5">
                    <h1 className=" h2 fs-2 fw-semibold pb-1 ">
                      Product Ratings
                    </h1>

                    <div className="d-flex align-items-center me-3">
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        size="large"
                        readOnly
                      />
                      <p className="opacity-60">58809 Ratings</p>
                    </div>

                    <div className="mt-5">
                      <div className="row align-items-center gap-3">
                        <div className="col-12 col-md-2">
                          <p>Excellent</p>
                        </div>
                        <div className="col-12 col-md-7">
                          <div className="progress">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "75%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="row align-items-center gap-3">
                        <div className="col-12 col-md-2">
                          <p>Good</p>
                        </div>
                        <div className="col-12 col-md-7">
                          <div className="progress">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{ width: "55%" }}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="row align-items-center gap-3">
                        <div className="col-12 col-md-2">
                          <p>Average</p>
                        </div>
                        <div className="col-12 col-md-7">
                          <div className="progress">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "35%" }}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="row align-items-center gap-3">
                        <div className="col-12 col-md-2">
                          <p>Poor</p>
                        </div>
                        <div className="col-12 col-md-7">
                          <div className="progress">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: "15%" }}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
