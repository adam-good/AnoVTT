import React from "react";
import { isLoggedIn } from "../utils/auth.js";

const Home: React.FC = () => {
  return (
    <div>{isLoggedIn() ? <h1>Welcome!</h1> : <h1>AnoVTT Home Page</h1>}</div>
  );
};

export default Home;
