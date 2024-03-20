import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import About from "../pages/LandingPage/About";
import Services from "../pages/LandingPage/Services";
import Login from "../pages/Auth/Login";
import RecoveryPassword from "../pages/Auth/RecoveryPassword";
import SendVerification from "../pages/Auth/SendVerification";
import VerificationNumber from "../pages/Auth/VerificationNumber";
import UserData from "../pages/Auth/UserData";
import HomePage from "../pages/Home/HomePage";
import Solicitudes from "../pages/Home/Solicitudes";
import Service from "../pages/Home/ServicesPage";

const RoutesApp = () => {
  const [selectedCard, setSelectedCard] = useState('casa');

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="services" element={<Services />} />
        <Route path="prices" element={<></>} />
        <Route path="register" element={<UserData />} />
        <Route path="contact" element={<VerificationNumber />} />
        <Route path="recoverypassword" element={<RecoveryPassword />} />
        <Route path="send-code" element={<SendVerification />} />
        <Route path="sendNumber" element={<VerificationNumber />} />
      </Route>
      <Route path="home" element={<HomePage selectedCard={selectedCard} setSelectedCard={setSelectedCard} />} />
      <Route path="requests" element={<Solicitudes />} />
      <Route path="service" element={<Service selectedCardName={selectedCard} />} />
    </Routes>
  );
};

export default RoutesApp;
