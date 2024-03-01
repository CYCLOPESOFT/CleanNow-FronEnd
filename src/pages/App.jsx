<<<<<<< HEAD
import React from "react";
import RoutesApp from "../routes/routes";
import Landing from "./LandingPage/landing";
("./LandingPage/landing");
=======
import React from 'react';
import Login from './Auth/Login';

export default function App() {
  return (
    <div className="flex flex-wrap gap-2">
      {<Login />}

    </div>

  )
}
>>>>>>> main

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
