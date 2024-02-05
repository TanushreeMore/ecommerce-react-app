import React, { useState, useEffect } from "react";
import CartItem from './CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

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
    return totalAmount - discountAmount;
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
                {/* <!-- left side div --> */}
                <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                  {/* dynamically fetch data into cart */}
                  <div className="card shadow-sm p-4 m-3 ">
                    <h2 className="py-4 font-weight-bold">
                      Cart ({cartItems.length} items)
                    </h2>

                    {cartItems.map((item, index) => (
                      <div key={index} className="row mb-4 shadow-sm ">
                        {/* Cart item image */}
                        <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                          <img
                            src={item.img} // Update the property based on your actual data structure
                            className="img-fluid"
                            alt="cart img"
                          />
                        </div>

                        {/* Cart item details */}
                        <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                          <div className="row">
                            {/* Product name and details */}
                            <div className="col-6 card-title">
                          {/* <h1 className="mb-4 product_name">Blue Zara Shirt</h1>
                              <p className="mb-2">SHIRT - BLUE</p>
                              <p className="mb-2">COLOR: BLUE</p>
                              <p className="mb-3">SIZE: M</p> */}
                              <h1 className="mb-4 product_name">
                                {item.title}
                              </h1>
                              <p className="mb-2">{item.description}</p>
                            </div>

                            {/* Quantity inc dec */}
<div className="col-6">
  <ul className="pagination justify-content-end set_quantity">
      <li className="page-item">
          <button className="page-link bg-warning"
              onClick="decreaseNumber('textbox','itemval')">
              <i className="fas fa-minus  text-dark"></i>
          </button>
      </li>
      <li className="page-item">
          <input type="text" name="" size="1" className="page-link  text-dark"
              value="0" id="textbox" />
      </li>
      <li className="page-item">
          <button className="page-link bg-warning"
              onClick="increaseNumber('textbox','itemval')">
              <i className="fas fa-plus text-dark"></i>
          </button>
      </li>
  </ul>
</div>
                          </div>

  {/* Remover move and price */}
  <div className="row">
    <div className="col-8 d-flex justify-content-between remove_wish">
    <p><i class="fas fa-trash-alt text-warning"></i> REMOVE ITEM</p>
    <p><i class="fas fa-heart text-warning"></i>MOVE TO WISH LIST</p>
    </div>
    <div className="col-4 d-flex justify-content-end price_money">
      <h3>
        <span id={`itemval${index}`}>00 </span>
      </h3>
    </div>
  </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <!-- right side div --> */}
                <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                  <div className="right_side p-3 shadow bg-white">
                    <h2 className="product_name mb-5">The Total Amount Of</h2>
                    <div className="price_indiv d-flex justify-content-between">
                      <p>Product amount</p>
                      <p>
                        <span id="product_total_amt">00</span>
                      </p>
                    </div>
                    <div className="price_indiv d-flex justify-content-between">
                      <p>Shipping Charge</p>
                      <p>
                        ₹<span id="shipping_charge">100</span>
                      </p>
                    </div>
                    <hr />
                    <div className="total-amt d-flex justify-content-between font-weight-bold">
                      <p>The total amount of (including VAT)</p>
                      <p>
                        ₹
                        <span id="total_cart_amt">
                          {calculateTotalAmount().toFixed(2)}
                        </span>
                      </p>
                    </div>
                    {/* Display applied discount separately */}
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
                    )}
                    <button className="btn btn-dark text-uppercase">
                      Checkout
                    </button>
                  </div>
                  {/* <!-- discount code part --> */}
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
                  </div>
                  {/* <!-- discount code ends --> */}
                  <div className="mt-3 shadow p-3 bg-white">
                    <div className="pt-4">
                      <h5 className="mb-4">Expected delivery date</h5>
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
