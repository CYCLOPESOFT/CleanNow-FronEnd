import React from "react";
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import About from "../pages/LandingPage/About";
import Services from "../pages/LandingPage/Services";
import Prices from "../pages/LandingPage/Prices";
import Contact from "../pages/LandingPage/Contact";
import Login from "../pages/Auth/Login";
import Landing from "../pages/LandingPage/landing";
import HomePage from "../pages/Home/HomePage"
import Solicitudes from "../pages/Home/Solicitudes"
import ServicesPage from "../pages/Home/ServicesPage";
import { element } from "prop-types";

const RoutesApp = () => {

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <Routes>
        <Route index path="/" element={<HomePage selectedCard={selectedCard} setSelectedCard={setSelectedCard} />}/>
        <Route path="about" element={<About />} />
        <Route path="services" element={<Solicitudes />} />
        <Route path="prices" element={<Prices />} />
        <Route path="contact" element={<Contact />} />
        <Route path={`/${selectedCard}`} element={<ServicesPage selectedCardName={selectedCard}/>}/> 
      
    </Routes>
  );
};
export default RoutesApp;
