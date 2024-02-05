import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../State/Order/orderAction";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(store=>store.auth)

  console.log("auth.user:", auth.user);
  console.log("auth.user.addresses:", auth.user?.addresses);

  const handleSubmit = (e) => {
    e.preventDefault();
    const addressData = new FormData(e.currentTarget);
    const address = {
      firstName: addressData.get("firstName"),
      lastName: addressData.get("lastName"),
      streetAddress: addressData.get("inputAddress"),
      city: addressData.get("inputCity"),
      state: addressData.get("inputState"),
      zipCode: addressData.get("inputZip"),
      mobile: addressData.get("inputMobile"),
    };

    const orderData = { address: address, navigate: navigate }
    dispatch(createOrder(orderData))
    console.log("Address orderData ", orderData);
    console.log("Address : ", address);
  };

  return (
    <div className="container">
      <div className="row">
        {/* left side */}
        <div className="col-md-5 col-12 border-5 shadow card rounded-3 mb-4 ">
          <div className="p-5 py-7 border-5 text-left ">
            <h3 className="text-center text-uppercase ">Details :</h3>
            <br />
            <AddressCard />
            {auth.user?.map((item) => (
              <AddressCard key={item} address={item} />
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="col-md-7 col-12 border-5 shadow card rounded-3">
          <form onSubmit={handleSubmit} className="p-3 mt-5 ">
            <div className="form-row mb-2">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                id="inputAddress"
                name="inputAddress"
                placeholder="Address"
                required
                rows="3"
              ></textarea>
            </div>

            <div className="form-row mb-2">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="inputCity"
                  placeholder="City"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputState"
                  name="inputState"
                  placeholder="State"
                  required
                />
              </div>
            </div>

            <div className="form-row mb-2">
              <div className="form-group col-md-6">
                <input
                  type="number"
                  className="form-control"
                  id="inputZip"
                  name="inputZip"
                  placeholder="Zip Code"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="number"
                  className="form-control"
                  id="inputMobile"
                  name="inputMobile"
                  placeholder="Contact Number"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-dark mt-2">
              Deliver Here
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddressForm;
