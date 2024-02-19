import React from 'react'
import Header from "../common/Header";
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
// import Login from '../profile/Login';
// import Register from '../profile/Register';
import Cart from '../pages/cart/Cart';
import AllProducts from '../pages/AllProducts';
import ProductList from '../pages/product/ProductList';
import ProductDetails from '../pages/product/ProductDetails/ProductDetails';
import Checkout from '../pages/Checkout/Checkout';
import Contact from '../pages/Contact';
import Order from '../pages/Order/Order';
import OrderDetails from '../pages/Order/OrderDetails';
import PaymentSuccess from '../pages/Payment/PaymentSuccess';
import UserProfile from '../profile/UserProfile';

const CustomerRouters = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
      <Navbar />
        </div>
        <Routes>
            {/* homePage */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/allproducts" element={<AllProducts />} />
        {/* login */}
        <Route exact path="/login" element={<Home />} /> {/* {<Login /> */}
        <Route exact path="/register" element={<Home />} />
        <Route exact path="/profile" element={<UserProfile />} />
        {/* cart */}
        <Route exact path="/cart" element={<Cart />} />
        {/* products */}
        
        {/* <Route exact path="/:levelone/:leveltwo/:levelthree" element={<ProductList />} /> */}
        <Route exact path="/productlist" element={<ProductList />} />
        <Route exact path="/product/:productId" element={<ProductDetails />} />
        {/* checkout */}
        <Route exact path="/checkout" element={<Checkout />} />
        {/* order */}
        <Route exact path="/account/order" element={<Order />} />
        <Route exact path="/account/order/:orderId" element={<OrderDetails />} />
        <Route exact path="/payment/:orderId" element={<PaymentSuccess />} />
        {/* contact */}
        <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default CustomerRouters