import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import About from "../pages/LandingPage/About";
import Services from "../pages/LandingPage/Services";
import Prices from "../pages/LandingPage/Prices";
import Contact from "../pages/LandingPage/Contact";
import Login from "../pages/Auth/Login";
import Landing from "../pages/LandingPage/landing";
import RecoveryPassword from "../pages/Auth/RecoveryPassword";
import SendVerification from "../pages/Auth/SendVerification";
import VerificationNumber from "../pages/Auth/VerificationNumber";
import UserData from "../components/Login/UserData";

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Login />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="prices" element={<UserData />} />
      <Route path="contact" element={<VerificationNumber />} />
      <Route path="recoverypassword" element={<RecoveryPassword />} />
      <Route path="send-code" element={<SendVerification />} />
      <Route path="sendNumber" element={<VerificationNumber />} />
    </Route>
  </Routes>
);
export default RoutesApp;
