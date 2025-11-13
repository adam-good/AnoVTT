export interface AuthCredidentials {
  username: string;
  password: string;
}

// TODO: Registration should probably be its own service
export interface RegistrationCredidentials {
  username: string;
  email: string;
  password: string;
}

// TODO: This should wrap the JWT data we get from the server
export interface Token {
  accessToken: string; // For now let's just let this be the JWT
}
