import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AuthStoreActionTypes,
  Login,
  LoginFail,
  Register,
  RegisterFail
} from './auth-store.actions';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';
import { of } from 'rxjs';

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
      this.http.post(env.baseApiUrl + '/auth/login', action.payload).pipe(
        map(result => ({type: AuthStoreActionTypes.LOGIN_SUCCESS, payload: result})),
        tap(result => {
          this.authService.login(result.payload);
          this.router.navigate(['landing']);
        }),
        catchError(err => of(new LoginFail(err.error.response)))
      )
    )
  );

  @Effect()
  register$ = this.actions$.pipe(
    ofType(AuthStoreActionTypes.REGISTER),
    switchMap((action: Register) =>
      this.http.post(env.baseApiUrl + '/auth/register', action.payload).pipe(
        map(result => ({type: AuthStoreActionTypes.REGISTER_SUCCESS, payload: result})),
        tap(result => {
          this.authService.login(result.payload);
          this.router.navigate(['login']);
        }),
        catchError(err => of(new RegisterFail(err.error.response)))
      )
    )
  );

}
