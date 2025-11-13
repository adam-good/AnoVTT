import React from "react";
import { authService } from "../services/authService.js";

const Home: React.FC = () => {
  return (
    <div>
      {authService.isLoggedIn() ? <h1>Welcome!</h1> : <h1>AnoVTT Home Page</h1>}
    </div>
  );
};

export default Home;
