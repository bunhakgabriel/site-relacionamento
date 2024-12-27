import { User, LoginCredentials } from '../types/auth';

class AuthStore {
  private users: User[] = [];
  private currentUser: User | null = null;

  register(user: Omit<User, 'id'>): boolean {
    const existingUser = this.users.find(
      u => u.email === user.email || u.name === user.name
    );

    if (existingUser) {
      return false;
    }

    const newUser = {
      ...user,
      id: crypto.randomUUID()
    };

    this.users.push(newUser);
    return true;
  }

  login(credentials: LoginCredentials): boolean {
    const user = this.users.find(
      u => (u.email === credentials.identifier || u.name === credentials.identifier) 
      && u.password === credentials.password
    );

    if (user) {
      this.currentUser = user;
      return true;
    }

    return false;
  }

  logout(): void {
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}

export const authStore = new AuthStore();