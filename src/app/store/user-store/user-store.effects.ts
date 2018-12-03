import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserActionTypes, LoadUserFail, LoadUser } from './user-store.actions';
import { HttpClient } from '@angular/common/http';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';
import { of } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LoginResponse } from 'src/app/shared/models/login-response';
import { Router } from '@angular/router';

@Injectable()
export class UserStoreEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(UserActionTypes.LOAD_USER),
    switchMap((action: LoadUser) =>
      this.http.get(`${env.baseApiUrl}/user/profile`).pipe(
        map(result => ({ type: UserActionTypes.LOAD_USER_SUCCESS, payload: result })),
        catchError(err => of(new LoadUserFail(err))),
      ),
    ),
  );
}
