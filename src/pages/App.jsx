import React from "react";
import RoutesApp from "../routes/routes";
import HomePage from "./Home/HomePage";
import Solicitudes from "./Home/Solicitudes";
import ServicesPage from "./Home/ServicesPage";
import PerfilPage from "./Home/PerfilPage";
import ListaChat from "./Chat/ListaChat";
import Chat from "./Chat/Chat";
import Opiniones from "./Home/Opiniones";
import Notificaciones from "./Home/Notificaciones";


const App = () => {
  return (
    <div className="app">
      <Notificaciones />
    </div>
  );
};

export default App;
