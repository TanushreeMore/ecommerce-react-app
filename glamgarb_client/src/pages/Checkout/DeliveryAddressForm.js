import React, { useEffect, useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../State/Order/orderAction";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../State/Auth/authAction";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(store=>store.auth)
  const [addressList, setAddressList] = useState([]);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    // Fetch user data when the component mounts
    dispatch(getUser(localStorage.getItem("jwt")));
  }, [dispatch]);

  // Check if user is authenticated and user data is available
  if (!auth.isAuthenticated || !auth.user) {
    return <div className="text-center h4 m-5 p-5">LOG IN TO YOUR ACCOUNT</div>;
  }

  console.log("auth.user:", auth.user);
  console.log("auth.user.addresses:", auth.user?.address);

  const handleSubmit = (e) => {
    e.preventDefault();
    const addressData = new FormData(e.currentTarget);
    const newAddress = {
      firstName: addressData.get("firstName"),
      lastName: addressData.get("lastName"),
      streetAddress: addressData.get("inputAddress"),
      city: addressData.get("inputCity"),
      state: addressData.get("inputState"),
      zipCode: addressData.get("inputZip"),
      mobile: addressData.get("inputMobile"),
    };

    // Update address list state
    setAddressList([...addressList, newAddress]);

    const orderData = { address: newAddress, navigate: navigate }
    dispatch(createOrder(orderData))
    console.log("Address orderData ", orderData);
    console.log("Address : ", newAddress);
  };

  return (
    <div className="m-5">
      <div className="row">
        {/* left side */}
        <div className="col-md-5 col-12 border-5 shadow card rounded-3 mb-4 ">
          <div className="p-5 py-7 border-5 text-left ">
            <h3 className="text-center text-uppercase ">Details :</h3>
            <br />
            {/* Render user addresses if available */}
            {addressList.map((address, index) => (
              <AddressCard key={index} address={address} />
            ))}
            {/* <AddressCard />
            {auth.user?.map((item) => (
              <AddressCard key={item} address={item} />
            ))} */}
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
                  value={auth.user.firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={auth.user.lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
