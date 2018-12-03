import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AdminStoreActionTypes, LoadAdminUsersFail, LoadAdminUsers } from './admin-store.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { of } from 'rxjs';

@Injectable()
export class AdminStoreEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {
  }

  @Effect()
  loadAdminUsers$ = this.actions$.pipe(
    ofType(AdminStoreActionTypes.LOAD_ADMIN_USERS),
    switchMap((action: LoadAdminUsers) =>
    // `${env.baseApiUrl}/admin/users`
      this.http.get('../../../assets/data/user.json').pipe(
        map(result => ({ type: AdminStoreActionTypes.LOAD_ADMIN_USERS_SUCCESS, payload: result })),
        catchError(err => of(new LoadAdminUsersFail(err))),
      ),
    ),
  );

}
