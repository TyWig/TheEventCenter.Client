import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AdminStoreActionTypes, LoadAdminUsersFail, LoadAdminUsers, AddAdminUser, DeleteAdminUser } from './admin-store.actions';
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

  @Effect()
  addAdminUsers$ = this.actions$.pipe(
    ofType(AdminStoreActionTypes.ADD_ADMIN_USER),
    switchMap((action: AddAdminUser) =>
      of({ type: AdminStoreActionTypes.ADD_ADMIN_USER_SUCCESS, payload: action.payload }),
    // `${env.baseApiUrl}/admin/users`
      // this.http.post(`${env.baseApiUrl}/admin/users`, action.payload).pipe(
      //   map(result => ({ type: AdminStoreActionTypes.LOAD_ADMIN_USERS_SUCCESS, payload: result })),
      //   catchError(err => of(new LoadAdminUsersFail(err))),
      // ),
    ),
  );

  @Effect()
  deleteAdminUser$ = this.actions$.pipe(
    ofType(AdminStoreActionTypes.DELETE_ADMIN_USER),
    switchMap((action: DeleteAdminUser) =>
      of({ type: AdminStoreActionTypes.DELETE_ADMIN_USER_SUCCESS, payload: action.payload }),
    // `${env.baseApiUrl}/admin/users`
      // this.http.post(`${env.baseApiUrl}/admin/users`, action.payload).pipe(
      //   map(result => ({ type: AdminStoreActionTypes.LOAD_ADMIN_USERS_SUCCESS, payload: result })),
      //   catchError(err => of(new LoadAdminUsersFail(err))),
      // ),
    ),
  );

}
