export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  location: string;
}

export interface LoginCredentials {
  identifier: string; // email or username
  password: string;
}