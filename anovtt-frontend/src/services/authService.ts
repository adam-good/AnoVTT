import axios, { type AxiosResponse } from "axios";
import { isExpired } from "react-jwt";
import {
  type AuthCredidentials,
  type RegistrationCredidentials,
  type Token,
} from "../types/authTypes.js";
import { Result, type Failure, type Success } from "../utils/result.js";

const api = axios.create({
  baseURL: "http://localhost:8080/api/auth",
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
    return tokenStr ? { accessToken: tokenStr } : null;
  },

  validateTokens(tokens: Token): boolean {
    return !isExpired(tokens.accessToken);
  },

  // TODO: Token refresh
  async refreshToken(): Promise<Token | null> {
    throw Error("refreshToken Not Implemented Yet");
  },

  // TODO: This should utelize the Result type once I implement it
  async login(
    creds: AuthCredidentials,
  ): Promise<Success<Token> | Failure<Error>> {
    try {
      const response = await api.post("/login", creds);
      const token: Token | null = response.data?.token
        ? { accessToken: response.data.token }
        : null;

      if (token) this.setTokens(token);

      return Result.ok(token);
    } catch (e) {
      console.log("Login Error: ", e);
      return Result.err(new Error("Login Error"));
    }
  },

  logout(): Success<null> | Failure<Error> {
    let result: Result<void, Error> = Result.ok();
    try {
      //TODO: implement this for logging some day
      //await api.post("/logout");
      result = Result.ok();
    } catch (e) {
      console.log("Logout Error: ", e);
      result = Result.err(new Error("Logout Error"));
    } finally {
      this.removeTokens();
      return result;
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
