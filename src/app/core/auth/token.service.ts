import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { LoginResponse } from 'src/app/shared/models/login-response';

@Injectable()
export class TokenService {

  constructor(
    private localStorage: LocalStorageService,
  ) {
  }

  getToken() {
    const auth = this.localStorage.getItem('AUTH') as LoginResponse;
    if (auth) {
      return auth.auth_token;
    }
    return null;
  }
}
