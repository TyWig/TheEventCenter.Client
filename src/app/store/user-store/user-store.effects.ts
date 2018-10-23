import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserActionTypes, Login, LoginFail } from './user-store.actions';
import { HttpClient } from '@angular/common/http';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';
import { of } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LoginResponse } from 'src/app/shared/models/login-response';

@Injectable()
export class UserStoreEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private authService: AuthService,
  ) {
  }

  @Effect()
  login$ = this.actions$.pipe(
    ofType(UserActionTypes.LOGIN),
    switchMap((action: Login) =>
      this.http.post(env.baseApiUrl + '/auth/login', action.payload).pipe(
        map(result => ({type: UserActionTypes.LOGIN_SUCCESS, payload: result})),
        tap(result => {
          const loginResponse = result.payload as LoginResponse;
          this.authService.login(loginResponse);
        }),
        catchError(err => of(new LoginFail(err)))
      )
    )
  );

}
