import React from "react";
import OrderCard from "./OrderCard";
import OrderTracker from "./OrderTracker";

const orderStatus = [
  { label: "On The Way", value: "On The Way" },
  { label: "Delivered", value: "Delivered" },
  { label: "Cancelled", value: "Cancelled" },
  { label: "Returned", value: "Returned" },
];

const Order = () => {
  return (
    <div className="px-5">
      <div className="row">

        <div className="col-3">
          <div className="shadow-lg text-center  pt-5 p-3 mt-5 h-auto bg-white sticky-top">
            <h1 className="fw-bold text-center ">Filter</h1>
            <div className="my-4 mt-10">
              <h4 className="fw-semibold mb-3">ORDER STATUS</h4>
              {orderStatus.map((option) => (
                <div className="d-flex mt-1 ms-lg-5 ">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-9">
          <div className="my-5">
            {[1, 1, 1, 1, 1].map((item) => (
              <OrderCard />
            ))}
          </div>
        </div>
      </div>
    </div>
    // <div className='d-flex justify-content-between'>
    //     <div className="container row">
    //         <div className="col-3">
    //           <OrderTracker />
    //         </div>

    //     </div>
    // </div>
  );
};

export default Order;
