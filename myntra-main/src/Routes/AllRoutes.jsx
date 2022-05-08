import React from 'react'
import {Routes ,Route ,Link,useNavigate} from 'react-router-dom'
import Home from '../Pages/Home'
import CartPage from "../Pages/CartPage";
import AddressPage from '../Pages/AddressPage';
import PaymentPage from "../Pages/PaymentPage";
import OrderConfirmPage from "../Pages/OrderConfirmPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";



const AllRoutes = () => {
  return (
    <Routes>
      <Route extact path="/" element={<Home />} />
      <Route extact path="/men" element={<Home />} />
      <Route extact path="/women" element={<Home />} />
      <Route extact path="/singlemen" element={<Home />} />
      <Route extact path="/singlewomen" element={<Home />} />
      <Route extact path="/cart" element={<CartPage />} />
      <Route extact path="/address" element={<AddressPage />} />
      <Route extact path="/payment" element={<PaymentPage />} />
      <Route extact path="/ordersuccess" element={<OrderConfirmPage />} />
      <Route extact path="/login" element={<LoginPage />} />
      <Route extact path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default AllRoutes