import { Action } from '@ngrx/store';
import { LoginResponse } from 'src/app/shared/models/login-response';

export enum AuthStoreActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAIL = '[Auth] Login Fail',

  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register Success',
  REGISTER_FAIL = '[Auth] Register Fail',

  AUTH_RESET = '[Auth] Auth Reset',
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

export class AuthReset implements Action {
  readonly type = AuthStoreActionTypes.AUTH_RESET;
  constructor() { }
}

export type AuthStoreActions = Login
| LoginFail
| LoginSuccess
| Register
| RegisterSuccess
| RegisterFail
| AuthReset;
