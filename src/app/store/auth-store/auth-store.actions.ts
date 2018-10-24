import { Action } from '@ngrx/store';
import { LoginResponse } from 'src/app/shared/models/login-response';

export enum AuthStoreActionTypes {
  LOGIN = '[User] Login',
  LOGIN_SUCCESS = '[User] Login Success',
  LOGIN_FAIL = '[User] Login Fail',

  REGISTER = '[User] Register',
  REGISTER_SUCCESS = '[User] Register Success',
  REGISTER_FAIL = '[User] Register Fail',
}

export class Login implements Action {
  readonly type = AuthStoreActionTypes.LOGIN;
  constructor(public payload: any) { }
}
export class LoginFail implements Action {
  readonly type = AuthStoreActionTypes.LOGIN_FAIL;
  constructor(public payload: any) { }
}
export class LoginSuccess implements Action {
  readonly type = AuthStoreActionTypes.LOGIN_SUCCESS;
  constructor(public payload: LoginResponse) { }
}

export class Register implements Action {
  readonly type = AuthStoreActionTypes.REGISTER;
  constructor(public payload: any) { }
}
export class RegisterFail implements Action {
  readonly type = AuthStoreActionTypes.REGISTER_FAIL;
  constructor(public payload: any) { }
}
export class RegisterSuccess implements Action {
  readonly type = AuthStoreActionTypes.REGISTER_SUCCESS;
  constructor(public payload: LoginResponse) { }
}

export type AuthStoreActions = Login
| LoginFail
| LoginSuccess
| Register
| RegisterSuccess
| RegisterFail;
