import React from "react";
import RoutesApp from "../routes/routes";
import HomePage from "./Home/HomePage";
import Solicitudes from "./Home/Solicitudes";
import ServicesPage from "./Home/ServicesPage";

const App = () => {
  return (
    <div className="app">
      <RoutesApp />
    </div>
  );
};

export default App;
