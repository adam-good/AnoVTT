import React from "react";
import { authService } from "../services/authService.js";
import { Link } from "react-router-dom";
import { isSuccess, type Result } from "../utils/result.js";

const Signout: React.FC = () => {
  const result: Result<null | void, Error> = authService.logout();
  if (isSuccess(result)) window.location.href = "/";
  else alert(result.error?.message);

  return (
    <p>
      If you aren't redirected, click
      <Link to="/"> here</Link>
    </p>
  );
};

export default Signout;
