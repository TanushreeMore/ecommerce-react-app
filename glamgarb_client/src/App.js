import { Route, Routes } from "react-router-dom";
import '../src/css/style.css'
// import Home from "./pages/Home";
// import Header from "./common/Header";
// import Footer from "./common/Footer";
// import Navbar from "./common/Navbar";
// import AllProducts from "./pages/AllProducts";
// import Contact from "./pages/Contact";
// import Cart from "./pages/cart/Cart";
// import ProductList from "./pages/product/ProductList";
// import Login from "./profile/Login";
// import Register from "./profile/Register";
// import Logout from "./profile/Logout";
// import Checkout from "./pages/Checkout/Checkout";
// import Order from "./pages/Order/Order";
import CustomerRouters from "./Routers/CustomerRouters";
import AdminRouters from "./Routers/AdminRouters";

function App() {
  return (
    <div>
      {/* <Header />
      <Navbar /> */}
      <Routes> 
      <Route exact path="/admin/*" element={<AdminRouters />} />
      <Route exact path="*" element={<CustomerRouters />} />
        
        
        {/* <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/allproducts" element={<AllProducts />} />
        <Route exact path="/productlist" element={<ProductList />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/contact" element={<Contact />} />

        
        <Route exact path="/account/order" element={<Order />} /> */}

      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
