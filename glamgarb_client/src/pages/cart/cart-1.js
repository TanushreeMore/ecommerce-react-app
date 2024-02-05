// Cart.js
import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  
  const navigate= useNavigate();
  const handleCheckout = () => {
    navigate("/checkout")
  }

  useEffect(() => {
    // Fetch products from the backend
    fetch("http://localhost:3002/api/products")
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Function to handle discount code application
  const applyDiscountCode = () => {
    const validDiscountCode = "yourDiscountCode";

    if (discountCode === validDiscountCode) {
      // Apply a 10% discount
      const discountRate = 0.1;
      setAppliedDiscount(discountRate);
    } else {
      alert("Invalid discount code. Please try again."); // Invalid discount code
    }
  };

  // Function to calculate the total amount of the cart
  const calculateTotalAmount = () => {
    // Assuming each item has a 'price' property
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
    // Subtract the applied discount
    const discountAmount = totalAmount * appliedDiscount;
    // Display total amount without discount
    const totalWithShipping = totalAmount - discountAmount + 100; // add shipping charges

    return totalWithShipping.toFixed(2);
  };
  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  // Function to move an item to the wishlist
  const moveToWishlist = (index) => {
    const movedItem = cartItems[index];
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    setWishlist([...wishlist, movedItem]);
  };

  return (
    <>
      <div className="my-5">
        <div className="m-lg-1 text-center my-5">
          <h3>&mdash; CART &mdash;</h3>
        </div>
        <div className="bg-light container-fluid">
          <div className="row">
            <div className="col-md-10 col-11 mx-auto">
              <div className="row mt-5 gx-3">
                {/* left side div */}
                <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                  {/* dynamically fetch data into cart */}
                  <div className="card shadow-sm p-4 m-3 ">
                    <h2 className="py-4 font-weight-bold">
                      Cart ({cartItems.length} items)
                    </h2>

                    {cartItems.map((item, index) => (
                      <CartItem
                        key={index}
                        item={item}
                        index={index}
                        removeFromCart={() => removeFromCart(index)}
                        moveToWishlist={() => moveToWishlist(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* right side div */}
                <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                  <div className="right_side p-3 shadow bg-white">
                    <h2 className="product_name my-1 font-weight-bold text-muted">Price Details</h2>
                    <hr className="text-muted w-100"  style={{ background:"#E5E4E2",}}/>
                    <div className="price_indiv d-flex justify-content-between my-1  mt-4">
                      <p>Price (3 items) </p>
                      <p>
                      ₹<span id="product_total_amt">{calculateTotalAmount()}</span>
                      </p>
                    </div>
                    <div className="price_indiv d-flex justify-content-between my-1 ">
                      <p>Discount</p>
                      <p>
                      -₹<span>240</span>
                      </p>
                    </div>
                    <div className="price_indiv d-flex justify-content-between my-1 ">
                      <p>Delivery Charge</p>
                      <p className="text-success font-weight-bold ">Free</p>
                    </div>
                    <hr className="text-muted w-100"  style={{ background:"#E5E4E2",}}/>
                    <div className="total-amt d-flex justify-content-between mt-3 font-weight-bold">
                      <p>Total Amount</p>
                      <p>
                      ₹<span id="total_cart_amt">{calculateTotalAmount()}</span>
                      </p>
                    </div>
                    {/* Display applied discount separately */}
                    {/* dont wish to add this part in project 
                    {appliedDiscount > 0 && (
                      <div className="total-amt d-flex justify-content-between font-weight-bold">
                        <p>Discount Applied</p>
                        <p>
                          - ₹
                          <span>
                            {(appliedDiscount * calculateTotalAmount()).toFixed(
                              2
                            )}
                          </span>
                        </p>
                      </div>
                    )} */}
                    <div className="mt-3">
                    <button className="btn btn-dark text-uppercase">
                      <Link onClick={handleCheckout} variant="contained" className="text-white ">
                      Checkout
                      </Link>
                    </button>
                    </div>
            
                  </div>
                  {/* discount code part */}
                  {/*  dont wish to add this part in project
                  <div className="discount_code mt-3 shadow">
                    <div className="card">
                      <div className="card-body">
                        <a
                          className="d-flex justify-content-between text-warning"
                          data-toggle="collapse"
                          href="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          Add a discount code (optional)
                          <span>
                            <i className="fas fa-chevron-down pt-1"></i>
                          </span>
                        </a>
                        <div className="collapse" id="collapseExample">
                          <div className="mt-3">
                            <input
                              type="text"
                              name="discount_code"
                              id="discount_code1"
                              className="form-control font-weight-bold"
                              placeholder="Enter the discount code"
                              value={discountCode}
                              onChange={(e) => setDiscountCode(e.target.value)}
                            />
                            <small id="error_trw" className="text-dark mt-3">
                              code is discountCode
                            </small>
                          </div>
                          <button
                            className="btn btn-dark btn-sm mt-3"
                            onClick={applyDiscountCode}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* discount code ends */}
                  <div className="mt-3 shadow p-3 bg-white">
                    <div className="pt-4">
                      <h5 className="mb-4 font-weight-bold text-muted">Expected delivery date</h5>
                      <p>January 08th 2024 - October 18th 2024</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
