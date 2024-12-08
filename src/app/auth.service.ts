import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor() { }

  login() {
    this.loggedIn = true;
    sessionStorage.setItem('auth_token', 'token_value');
  }

  logout() {
    this.loggedIn = false;
    sessionStorage.removeItem('auth_token');
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('auth_token') !== null;
  }
}
