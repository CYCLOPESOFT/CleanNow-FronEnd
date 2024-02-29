import React from "react";
import RoutesApp from "../routes/routes";
import Landing from "./LandingPage/landing";
("./LandingPage/landing");

const App = () => {
  const [isAnimating, setAnimating] = useState(false);

  if (isAnimating) {
    return (
      <div className="app">
        <RoutesApp />
      </div>
    );
  } else {
    return (
      <div className="app">
        <Landing setAnimating={setAnimating} />
      </div>
    );
  }
};

export default App;
