import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AuthStoreActionTypes,
  Login,
  LoginFail,
  Register,
  RegisterFail,
  Logout,
  LogoutFail,
} from './auth-store.actions';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';
import { of } from 'rxjs';
import { LoginResponse } from 'src/app/shared/models/login-response';
import { UserActionTypes } from '../user-store/user-store.actions';

@Injectable()
export class AuthStoreEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthStoreActionTypes.LOGIN),
    switchMap((action: Login) =>
      this.http.post(`${env.baseApiUrl}/auth/login`, action.payload).pipe(
        tap((authResponse) => {
          this.authService.setAuthResponse(authResponse as LoginResponse);
          this.router.navigate(['/']);
        }),
        switchMap(authResponse => [
          ({ type: AuthStoreActionTypes.LOGIN_SUCCESS, payload: authResponse }),
          ({ type: UserActionTypes.LOAD_USER }),
        ]),
        catchError(err => of(new LoginFail(err.error.response))),
      ),
    ),
  );

  @Effect()
  register$ = this.actions$.pipe(
    ofType(AuthStoreActionTypes.REGISTER),
    switchMap((action: Register) =>
      this.http.post(`${env.baseApiUrl}/auth/register`, action.payload).pipe(
        tap((registerResponse) => {
          this.authService.setAuthResponse(registerResponse as LoginResponse);
          this.router.navigate(['/']);
        }),
        switchMap(registerResponse => [
          ({ type: AuthStoreActionTypes.REGISTER_SUCCESS, payload: registerResponse }),
          ({ type: UserActionTypes.LOAD_USER }),
        ]),
        // map(result => ({ type: AuthStoreActionTypes.REGISTER_SUCCESS, payload: result })),
        // tap((result) => {
        //   this.authService.setAuthResponse(result.payload as LoginResponse);
        //   this.router.navigate(['login']);
        // }),
        catchError(err => of(new RegisterFail(err.error.response))),
      ),
    ),
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(AuthStoreActionTypes.LOGOUT),
    switchMap((action: Logout) =>
      this.http.get(`${env.baseApiUrl}/auth/logout`).pipe(
        switchMap(() => [
          ({ type: AuthStoreActionTypes.AUTH_RESET }),
          ({ type: UserActionTypes.USER_RESET }),
        ]),
        tap(() => {
          this.router.navigate(['/']);
          this.authService.removeAuthToken();
        }),
        catchError(err => of(new LogoutFail(err))),
      ),
    ),
  );

}
