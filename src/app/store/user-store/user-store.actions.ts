import { Action } from '@ngrx/store';
import { LoginResponse } from 'src/app/shared/models/login-response';

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
  constructor(public paylod: any) { }
}
export class LoginSuccess implements Action {
  readonly type = UserActionTypes.LOGIN_SUCCESS;
  constructor(public payload: LoginResponse) { }
}

export type UserStoreActions = Login
| LoginFail
| LoginSuccess;
