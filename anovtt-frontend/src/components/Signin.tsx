import React, { useState } from "react";
import * as auth_api from "../utils/auth.js";
import type { AxiosResponse } from "axios";

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

    try {
      const response: AxiosResponse = await auth_api.default.post(
        "/login",
        formData,
      );
      if (response.status >= 300) {
        throw Error(`Error: Response ${response.status}`);
      }
      localStorage.setItem("token", response.data.token);
      window.location.href = "/"; // TODO: Find a better option for this
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
