import React from "react";
import RoutesApp from "../routes/routes";
import HomePage from "./Home/HomePage";
import Solicitudes from "./Home/Solicitudes";
import ServicesPage from "./Home/ServicesPage";
import PerfilPage from "./Home/PerfilPage";
import ListaContacto from "./Chat/ListaContacto";

const App = () => {
  return (
    <div className="app">
      <ListaContacto />
    </div>
  );
};

export default App;
