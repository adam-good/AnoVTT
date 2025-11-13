import React from "react";
import { handleLogout } from "../utils/auth.js";
import { Link } from "react-router-dom";

const Signout: React.FC = () => {
  handleLogout();

  return (
    <p>
      If you aren't redirected, click
      <Link to="/">here</Link>
    </p>
  );
};

export default Signout;
