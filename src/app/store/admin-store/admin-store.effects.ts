import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AdminStoreActionTypes } from './admin-store.actions';

@Injectable()
export class AdminStoreEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(AdminStoreActionTypes.LoadAdminStores));

  constructor(private actions$: Actions) {}
}
