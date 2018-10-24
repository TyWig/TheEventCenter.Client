import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient
  ) {
  }

  login(response) {
    this.localStorage.setItem('AUTH', response);
  }

  getToken() {
    const auth = this.localStorage.getItem('AUTH');
    if (auth) {
      return auth.auth_token;
    }
    return null;
  }

  checkUserExists(email: string): Observable<any> {
    return this.http.post(env.baseApiUrl + '/auth/user-exists', email);
  }
}
