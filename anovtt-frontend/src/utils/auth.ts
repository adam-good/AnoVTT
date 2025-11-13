import axios, { type AxiosResponse } from "axios";
import { isExpired } from "react-jwt";

const api = axios.create({
  baseURL: "http://localhost:8080/api/auth",
  timeout: 1000,
});

export interface LoginFormData {
  username: string;
  password: string;
}

export interface SignupFormData {
  username: string;
  email: string;
  password: string;
}

export const isLoggedIn: () => boolean = () => {
  const token: string | null = localStorage.getItem("token");
  if (!token) return false;
  else return !isExpired(token);
};

export const handleLogin = async (loginData: LoginFormData) => {
  try {
    const response: AxiosResponse = await api.post("/login", loginData);
    if (response.status >= 300) {
      // TODO: define this better
      throw Error(`Error: Response ${response.status}`);
    }
    localStorage.setItem("token", response.data.token);
    window.location.href = "/"; // TODO: Find a better option for this
  } catch (e) {
    console.log("Login Error: ", e);
  }
};

export const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/"; // TODO: Find better option
};

//export default api;
