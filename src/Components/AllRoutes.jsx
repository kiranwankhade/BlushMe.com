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
import LipsCatPage from "../Pages/LipsCatPage";
import FaceCatPage from "../Pages/FaceCatPage";
import EyesCatPage from "../Pages/EyesCatPage";
import SkinCatPage from "../Pages/SkinCatPage";
import PrivateRoute from "./PrivateRoute";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loginForm" element={<LoginForm />} />
      <Route path="/offer" element={<PrivateRoute>
        <Offer />
      </PrivateRoute>} />
      <Route path="/wishlist" element={<PrivateRoute>
        <Wishlist />
      </PrivateRoute>} />
      <Route path="/cart" element={<PrivateRoute>
        <Cart />
      </PrivateRoute>} />
      <Route path="/otp" element={<OTP/>} />
      <Route path="/:id" element={<ItemDetails/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/lips" element={<LipsCatPage/>} />
      <Route path="/face" element={<FaceCatPage/>} />
      <Route path="/eyes" element={<EyesCatPage/>} />
      <Route path="/skin" element={<SkinCatPage/>} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
