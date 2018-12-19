import { Action } from '@ngrx/store';
import { User } from 'src/app/shared/models/user';

export enum UserActionTypes {
  LOAD_USER = '[User] Load User',
  LOAD_USER_SUCCESS = '[User] Load User Success',
  LOAD_USER_FAIL = '[User] Load User Fail',

  USER_RESET = '[User] Reset',
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LOAD_USER;
  constructor() { }
}
export class LoadUserFail implements Action {
  readonly type = UserActionTypes.LOAD_USER_FAIL;
  constructor(public payload: any) { }
}
export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USER_SUCCESS;
  constructor(public payload: User) { }
}

export class UserReset implements Action {
  readonly type = UserActionTypes.USER_RESET;
  constructor() { }
}

export type UserStoreActions = LoadUser
| LoadUserFail
| LoadUserSuccess
| UserReset;
