import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: any) {
    window.localStorage.setItem(`${env.localStoragePrefix}-${key}`, JSON.stringify(value));
  }

  getItem(key: string): any {
    const stringValue = window.localStorage.getItem(`${env.localStoragePrefix}-${key}`);
    return JSON.parse(stringValue);
  }

}
