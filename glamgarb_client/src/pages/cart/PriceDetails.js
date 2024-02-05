// PriceDetails.js
import React from 'react';

const PriceDetails = ({ index, quantity }) => {
  // Assuming each item has a 'price' property
  const itemPrice = 0; // replace with actual property name for price

  const calculateTotalPrice = () => {
    return itemPrice * quantity;
  };

  return (
    <>
      <h3 title="PRICE">
        ₹<span id={`itemval${index}`}>{calculateTotalPrice().toFixed(2)}</span>
      </h3>
    </>
  );
};

export default PriceDetails;
