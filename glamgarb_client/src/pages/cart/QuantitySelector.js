// QuantitySelector.js
// import React, { useState } from 'react';

// const QuantitySelector = ({ updateQuantity }) => {
//   const [quantity, setQuantity] = useState(0);

//   const decreaseNumber = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//       updateQuantity(quantity - 1);
//     }
//   };

//   const increaseNumber = () => {
//     setQuantity(quantity + 1);
//     updateQuantity(quantity + 1);
//   };

//   return (
//     <div className="col-6">
//       <ul className="pagination justify-content-end set_quantity">
//         <li className="page-item">
//           <button className="page-link bg-warning" onClick={decreaseNumber}>
//             <i className="fas fa-minus text-dark"></i>
//           </button>
//         </li>
//         <li className="page-item">
//           <input
//             type="text"
//             name=""
//             size="1"
//             className="page-link text-dark"
//             // value={quantity}
//             // onChange={(e) => updateQuantity(e.target.value)}
//             id="textbox"
//           />
//         </li>
//         <li className="page-item">
//           <button className="page-link bg-warning" onClick={increaseNumber}>
//             <i className="fas fa-plus text-dark"></i>
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default QuantitySelector;

// QuantitySelector.js
import React from 'react';

const QuantitySelector = ({ quantity, updateQuantity }) => {
  const decreaseNumber = () => {
    if (quantity > 0) {
      updateQuantity(quantity - 1);
    }
  };

  const increaseNumber = () => {
    updateQuantity(quantity + 1);
  };

  return (
    <div className="col-6">
      <ul className="pagination justify-content-end set_quantity">
        <li className="page-item">
          <button className="page-link bg-warning" onClick={decreaseNumber}>
            <i className="fas fa-minus text-dark"></i>
          </button>
        </li>
        <li className="page-item">
          <input
            type="text"
            name=""
            size="1"
            className="page-link text-dark"
            value={quantity}
            readOnly
          />
        </li>
        <li className="page-item">
          <button className="page-link bg-warning" onClick={increaseNumber}>
            <i className="fas fa-plus text-dark"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default QuantitySelector;
