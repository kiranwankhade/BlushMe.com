import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Offer from "../Pages/Offer";
import Wishlist from "../Pages/Wishlist";
import Cart from "../Pages/Cart";
import NotFound from "../Pages/NotFound";

import ItemDetails from "../Pages/ItemDetails";

import LoginForm from "../Pages/LoginForm"

import Payment from "../Pages/Payment"

import OTP from "../Pages/OTP"


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loginForm" element={<LoginForm />} />
      <Route path="/offer" element={<Offer />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/otp" element={<OTP/>} />
      <Route path="/:id" element={<ItemDetails/>} />
      <Route path="/payment" element={<Payment/>} />
      
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
