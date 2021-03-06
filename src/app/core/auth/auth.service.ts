import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoginSuccess, AuthReset } from 'src/app/store/auth-store/auth-store.actions';
import { LoginResponse } from 'src/app/shared/models/login-response';
import { LoadUser, UserReset } from 'src/app/store/user-store/user-store.actions';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient,
    private store: Store<any>,
    private jwtHelper: JwtHelperService,
  ) {
  }

  setAuthResponse(response: LoginResponse) {
    this.localStorage.setItem('AUTH', response);
  }

  removeAuthToken() {
    this.localStorage.removeItem('AUTH');
  }

  initAuth() {
    const auth = this.localStorage.getItem('AUTH') as LoginResponse;
    if (auth && auth.auth_token && !this.jwtHelper.isTokenExpired(auth.auth_token)) {
      this.store.dispatch(new LoginSuccess(auth));
      this.store.dispatch(new LoadUser());
    }
  }

  checkUserExists(email: string): Observable<any> {
    return this.http.post(`${env.baseApiUrl}/auth/user-exists`, email);
  }
}
