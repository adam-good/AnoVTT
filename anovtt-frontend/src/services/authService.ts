import axios, { type AxiosResponse } from "axios";
import { isExpired } from "react-jwt";
import {
  type AuthCredidentials,
  type RegistrationCredidentials,
  type Token,
} from "../types/authTypes.js";

const api = axios.create({
  baseURL: "http://localhost:8080/api/auth",
  timeout: 1000,
});

const AUTH_TOKEN_STRING: string = "authToken";

export const authService = {
  setTokens(tokens: Token): void {
    localStorage.setItem(AUTH_TOKEN_STRING, tokens.accessToken);
  },

  removeTokens(): void {
    localStorage.removeItem(AUTH_TOKEN_STRING);
  },

  getTokens(): Token | null {
    const tokenStr: string | null = localStorage.getItem(AUTH_TOKEN_STRING);
    return tokenStr ? JSON.parse(tokenStr) : null;
  },

  validateTokens(tokens: Token): boolean {
    return !isExpired(tokens.accessToken);
  },

  // TODO: Token refresh
  async refreshToken(): Promise<Token | null> {
    throw Error("refreshToken Not Implemented Yet");
  },

  // TODO: This should utelize the Result type once I implement it
  async login(creds: AuthCredidentials): Promise<Token | null> {
    try {
      const response = await api.post("/login", creds);
      const token: Token | null = response.data?.token
        ? { accessToken: response.data.token }
        : null;

      if (token) this.setTokens(token);

      return token;
    } catch (err) {
      console.log("Login Error: ", err);
    }
    return null;
  },

  async logout(): Promise<void> {
    try {
      await api.post("/logout"); // TODO: This needs a backend call
    } catch (err) {
      console.log("Logout Error: ", err);
    } finally {
      this.removeTokens();
    }
  },

  async register(creds: RegistrationCredidentials): Promise<void> {
    try {
      const response: AxiosResponse = await api.post("/register", creds);
      if (response.status >= 300)
        throw Error(`Error: Response ${response.status}`);
    } catch (err) {
      console.log("Registration Error: ", err);
    }
  },

  isLoggedIn(): boolean {
    const tokens = this.getTokens();
    return tokens ? this.validateTokens(tokens) : false;
  },
};
