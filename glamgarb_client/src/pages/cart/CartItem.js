// CartItem.js
import React, { useState } from 'react';
import QuantitySelector from './QuantitySelector';
import PriceDetails from './PriceDetails';
import RemoveWishlistButtons from './RemoveWishlistButtons';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../State/Cart/cartAction';

const CartItem = ({ item, index, removeFromCart, moveToWishlist }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleUpdateCartItem=(num)=>{
    const data={data:{quantity:item.quantity+num},CartItemId:item?._id}
  }
  const handleRemoveCartItem=()=>{
    dispatch(removeCartItem(item._id))
  }

  return (
    <div key={index} className="row mb-4 shadow-sm">
      {/* img */}
      <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
        <img
        src='https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fDB8fHww'
          // src={item?.product?.imageUrl}
          className="img-fluid"
          alt="cart img"
        />
      </div>
        {/* Product name and details */}
      <div className="col-md-7 col-11 mx-auto px-4 mt-2">
        <div className="row">
          <div className="col-6 card-title">
            <h1 className="mb-4 product_name">
              {/* {item?.product?.title} */}
              manual entery
              </h1>
            <p className="mb-2">
              {/* {item?.product?.description} */}
              cartitem is only fetching product id and user id. i need they to fetch all relevent data here.
              but it's not working.
            </p>
          </div>
           {/* Quantity inc dec */}
           <QuantitySelector quantity={quantity} updateQuantity={updateQuantity}  />
        </div>
        
  {/* Remover move and price */}
        <div className="row mt-4 ">
          <div className="col-8 d-flex justify-content-between remove_wish">            
            <RemoveWishlistButtons
   removeFromCart={() => removeFromCart(index)} //onClick={handleRemoveCartItem}
   moveToWishlist={() => moveToWishlist(index)}
             />
          </div>
          <div className="col-4 d-flex justify-content-end price_money">
            <PriceDetails index={index} quantity={quantity} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
