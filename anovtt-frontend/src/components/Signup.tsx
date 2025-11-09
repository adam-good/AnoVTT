import React, { useState } from "react";
import * as auth_api from "../utils/auth.js";

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("State Updated");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response: Response = await auth_api.default.post(
        "/register",
        formData,
      );
      if (response.status >= 300) {
        throw Error(`Error: Response ${response.status}`);
      }
    } catch (e) {
      console.log("Error: ", e);
    }
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
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
