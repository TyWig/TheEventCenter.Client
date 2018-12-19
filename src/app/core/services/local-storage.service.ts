import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class LocalStorageService {

  constructor(
    // private jwtHelper: JwtHelperService
  ) { }

  initStore() {
    const value = this.getItem('AUTH');
  }

  setItem(key: string, value: any) {
    window.localStorage.setItem(`${env.localStoragePrefix}-${key}`, JSON.stringify(value));
  }

  removeItem(key: string): any {
    window.localStorage.removeItem(`${env.localStoragePrefix}-${key}`);
  }

  getItem(key: string): any {
    const stringValue = window.localStorage.getItem(`${env.localStoragePrefix}-${key}`);
    return JSON.parse(stringValue);
  }

}
