import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserStoreActionTypes } from './user-store.actions';

@Injectable()
export class UserStoreEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(UserStoreActionTypes.LoadUserStores));

  constructor(private actions$: Actions) {}
}
