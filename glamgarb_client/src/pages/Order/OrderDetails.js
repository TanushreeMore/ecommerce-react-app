// OrderDetails.jsx

import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import "./orderDetails.css"; // Import the CSS file

const OrderDetails = () => {
  return (
    <div className=" shadow-lg m-5 ">
      <div className="shadow-sm m-3 ps-5 py-5  ">
        <h1 className="fw-semibold">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="fw-bolder pt-5">
        <OrderTracker activeStep={3} />
      </div>

      <div className="container">
        <div className="row my-5">
          {[1, 1, 1, 1, 1, 1].map((item) => (
            <div className="col-12" key={item}>
              <div className="orderDetailsCard">
                <div className="col-6 orderDetailsInfo">
                  <img
                    className="orderDetailsImage"
                    src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                    alt=""
                  />
                  <div className="ml-5 my-2">
                    <p>Men Black Jeans</p>
                    <p className="opacity-50">
                      <span>Color : Black</span>
                      {" "}{" "}
                      <span>Size : M</span>
                    </p>
                    <p>Seller : linaria</p>
                    <p>1099</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="orderDetailsRating">
                    <i className="fa-regular fa-star fa-xl"></i>
                    <span>Rate & Review Product</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;


// import React from "react";
// import AddressCard from "../AddressCard/AddressCard";
// import OrderTracker from "./OrderTracker";
// import 'orderDetails.css';

// const OrderDetails = () => {
//   return (
//     <div className="px-5 lg-px-20">
//       <div>
//         <h1 className="fw-bold text-xl py-5">Delivery Address</h1>
//         <AddressCard />
//       </div>
//       <div className="py-20">
//         <OrderTracker activeStep={3} />
//       </div>

//       <div className="container">
//         <div className="row my-5">
//           {[1, 1, 1, 1, 1, 1].map((item) => (
//             <div className="col-12" key={item}>
//               <div className="shadow-xl rounded-md p-5 border d-flex align-items-center justify-content-between">

//                 <div className="col-6">
//                   <div className="d-flex align-items-center mx-4">
//                     <img
//                       className="w-5 h-5"
//                       style={{ objectFit: "cover", objectPosition: "top" }}
//                       src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fDB8fHww"
//                       alt=""
//                     />

//                     <div className="ml-5 my-2">
//                       <p>Men Black Jeans</p>
//                       <p className="mx-5">
//                         <span>Color : Black</span>
//                         <span>Size : M</span>
//                       </p>
//                       <p>Seller : linaria</p>
//                       <p>1099</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-4">
//                   <div className="text-purple">
//                     <i className="fa-regular fa-star fa-xl"></i>
//                     <span>Rate & Review Product</span>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderDetails;
