import React, { useState } from "react";
import { authService } from "../services/authService.js";
import { type Token } from "../types/authTypes.js";
import { isSuccess, type Result } from "../utils/result.js";

const Signin: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const auth_result: Result<Token, Error> = await authService.login(formData); // TODO: this should be a Result
    if (isSuccess(auth_result)) window.location.href = "/";
    else alert(auth_result.error?.message);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signin;
