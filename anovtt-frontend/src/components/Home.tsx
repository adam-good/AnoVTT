import React from "react";
import { authService } from "../services/authService.js";
import type { Token } from "../types/authTypes.js";

const Home: React.FC = () => {
  const tokens: Token | null = authService.getTokens();
  const isLoggedIn: boolean = tokens
    ? authService.validateTokens(tokens)
    : false;

  return (
    <div>{isLoggedIn ? <h1>Welcome!</h1> : <h1>AnoVTT Home Page</h1>}</div>
  );
};

export default Home;
