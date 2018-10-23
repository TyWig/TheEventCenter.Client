import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { LoginResponse } from 'src/app/shared/models/login-response';

@Injectable()
export class AuthService {

  constructor(
    private localStorage: LocalStorageService
  ) {
  }

  login(response: LoginResponse) {
    this.localStorage.setItem('AUTH', response);
  }

  getToken() {
    const auth = this.localStorage.getItem('AUTH');
    return auth.auth_token || null;
  }

}
