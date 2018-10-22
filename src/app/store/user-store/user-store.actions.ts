import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LOGIN = '[User] Login',
  LOGIN_SUCCESS = '[User] Login Success',
  LOGIN_FAIL = '[User] Login Fail',
}

export class Login implements Action {
  readonly type = UserActionTypes.LOGIN;
  constructor(public payload: any) { }
}
export class LoginFail implements Action {
  readonly type = UserActionTypes.LOGIN_FAIL;
}
export class LoginSuccess implements Action {
  readonly type = UserActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) { }
}

export type UserStoreActions = Login
| LoginFail
| LoginSuccess;
