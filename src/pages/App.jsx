import React from "react";
import RoutesApp from "../routes/routes";
import HomePage from "./Home/HomePage";
import ServicesPage from "./Home/ServicesPage";


const App = () => {


  return (
    <div className="app">
      {/* <HomePage /> */}
      <ServicesPage />
    </div>
  );
};

export default App;
