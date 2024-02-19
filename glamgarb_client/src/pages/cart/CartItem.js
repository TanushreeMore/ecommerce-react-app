// CartItem.js
import React, { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import PriceDetails from "./PriceDetails";
import RemoveWishlistButtons from "./RemoveWishlistButtons";
// import { useDispatch } from 'react-redux';
// import { removeCartItem } from '../../State/Cart/cartAction';

const CartItem = ({
  item,
  index,
  removeFromCart,
  moveToWishlist,
  updateItem,
}) => {

  // const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleUpdateItem = () => {
    updateItem(); 
  };

  // const handleUpdateCartItem=(num)=>{
  //   const data={data:{quantity:item.quantity+num},CartItemId:item?._id}
  // }
  // const handleRemoveCartItem=()=>{
  //   dispatch(removeCartItem(item._id))
  // }

  // const product = item.product[0]; // Access the first element of the product array

  return (
    <div>
      {item && item.product && item.product.map((product, productIndex) => (
        <div key={index} className="row mb-4 shadow-sm">
          {/* img */}
          <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
            {/* Display each product image */}
            {/* {item.product.map((product, productIndex) => ( */}
            <img
              key={productIndex}
              src={product.imageUrl}
              className="img-fluid"
              alt={`cart img ${productIndex}`}
            />
            {/* ))} */}
          </div>
          {/* Product name and details */}
          <div className="col-md-7 col-11 mx-auto px-4 mt-2">
            {/* Display each product title and description */}
            {/* {item.product.map((product, productIndex) => ( */}
            <div className="row">
              <div className="col-6 card-title">
                <h1 className="mb-4 product_name">
                  {product?.title}
                  {/* manual entery */}
                </h1>
                <p className="mb-2">
                  {product?.description}
                  {/* cartitem is only fetching product id and user id. i need they to fetch all relevent data here.
                but it's not working. */}
                </p>

                <h5 className="mb-2">
                  Size: {" "}
                  {item?.size} {/* but it's not working. */}
                </h5>
              </div>

              {/* Quantity inc dec */}
              {/* <div className="col-6 col-sm-12"> */}
              <QuantitySelector
                quantity={quantity}
                updateQuantity={updateQuantity}
              />
              {/* </div> */}
            </div>
            {/* ))} */}

            {/* Remover move and price */}
            <div className="row mt-4 ">
              <div className="col-8 d-flex justify-content-between remove_wish">
                <RemoveWishlistButtons
                  removeFromCart={() => removeFromCart(index)} //onClick={handleRemoveCartItem}
                  updateCart={handleUpdateItem}
                  moveToWishlist={() => moveToWishlist(index)}
                />
              </div>
              <div className="col-4 d-flex justify-content-end price_money">
                {/* {item.product.map((product, productIndex) => ( */}
                <PriceDetails
                  index={index}
                  product={product}
                  quantity={quantity}
                />
                {/* ))} */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
