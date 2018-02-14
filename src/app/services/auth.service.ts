import { Injectable } from '@angular/core';
import * as cookie from 'js-cookie';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import * as store from 'store2';
import { Router } from '@angular/router';

const COOKIE_NAME = 'x-access-token';

@Injectable()
export class AuthService {
  private static loggedBool = false;
  private logged = new BehaviorSubject<boolean>(false);
  private notLogged = new BehaviorSubject<boolean>(true);
  private userLogged = new BehaviorSubject<any>(store.get('user'));
  constructor(private router: Router) {
    const token = cookie.get(COOKIE_NAME);
    if (token) {
      this.logged.next(true);
      this.notLogged.next(false);
      AuthService.loggedBool = true;
    } else {
      this.logged.next(false);
      this.notLogged.next(true);
      AuthService.loggedBool = false;
    }
  }
  loginIn(token: string, user): void {
    if (token.length < 10) {
      throw new Error('Error token isot set');
    }
    cookie.set(COOKIE_NAME, token);
    store.set('user', user);
    this.logged.next(true);
    this.notLogged.next(false);
    this.userLogged.next(user);
    AuthService.loggedBool = true;
  }
  logout(): void {
    cookie.remove(COOKIE_NAME);
    store.remove('user');
    this.logged.next(false);
    this.notLogged.next(true);
    this.userLogged.next(undefined);
    AuthService.loggedBool = false;
  }
  getToken(): string {
    return cookie.get(COOKIE_NAME) || '';
  }
  getUserLogged(): Observable<any> {
    return this.userLogged;
  }
  isLogged(): Observable<boolean> {
    return this.logged;
  }
  isNotLogged() {
    return this.notLogged;
  }
  isLoggedBoolean(): boolean {
    return AuthService.loggedBool;
  }
}
