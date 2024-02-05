import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../State/Order/orderAction";
import { updatePayment } from "../../State/Payment/paymentAction";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = () => {
//   const [referenceId, setReferenced] = useState();
  const [paymentId, setPaymentId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();

  const dispatch = useDispatch();
  const order = useSelector((store) => store.order);

  useEffect(() => {
    const urlparam = new URLSearchParams(window.location.search);

    setPaymentId(urlparam.get("razorpay_payment_id"));
    setPaymentStatus(urlparam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [dispatch, orderId, paymentId]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center text-center ">
        <div className="alert alert-success" role="alert">
          <h1>Payment Success</h1>
          <br />
          <h4>Congratulations! Your Order has been Placed Successfully.</h4>
        </div>
      </div>

      <div className="container g-5 py-5">
        {order.order?.orderItems.map((item) => (
          <div className="row mb-4" key={item.product.id}>
            <div className="col-md-6">
              <div className="card">
                <img
                  src={item.product.imageUrl}
                  className="card-img-top"
                  alt={item.product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.product.title}</h5>
                  <p className="card-text">Size: {item.size}</p>
                  <p className="card-text">Seller: {item.product.seller}</p>
                  <p className="card-text">₹{item.product.price}</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <AddressCard address={order.order?.shippingAddress} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentSuccess;
