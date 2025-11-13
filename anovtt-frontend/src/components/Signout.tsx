import React from "react";
import { authService } from "../services/authService.js";
import { Link } from "react-router-dom";

const Signout: React.FC = () => {
  authService.logout();

  return (
    <p>
      If you aren't redirected, click
      <Link to="/">here</Link>
    </p>
  );
};

export default Signout;
