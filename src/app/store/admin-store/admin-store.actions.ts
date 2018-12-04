import { Action } from '@ngrx/store';

export enum AdminStoreActionTypes {
  LOAD_ADMIN_USERS = '[AdminStore] Load AdminUsers',
  LOAD_ADMIN_USERS_SUCCESS = '[AdminStore] Load AdminUsers Success',
  LOAD_ADMIN_USERS_FAIL = '[AdminStore] Load AdminUsers Fail',

  ADD_ADMIN_USER = '[AdminStore] Add AdminUser',
  ADD_ADMIN_USER_SUCCESS = '[AdminStore] Add AdminUser Success',
  ADD_ADMIN_USER_FAIL = '[AdminStore] Add AdminUser Fail',

  DELETE_ADMIN_USER = '[AdminStore] Delete AdminUser',
  DELETE_ADMIN_USER_SUCCESS = '[AdminStore] Delete AdminUser Success',
  DELETE_ADMIN_USER_FAIL = '[AdminStore] Delete AdminUser Fail',
}

export class LoadAdminUsers implements Action {
  readonly type = AdminStoreActionTypes.LOAD_ADMIN_USERS;
}
export class LoadAdminUsersSuccess implements Action {
  readonly type = AdminStoreActionTypes.LOAD_ADMIN_USERS_SUCCESS;
  constructor(public payload: any[]) { }
}
export class LoadAdminUsersFail implements Action {
  readonly type = AdminStoreActionTypes.LOAD_ADMIN_USERS_FAIL;
  constructor(public error: any) { }
}
export class AddAdminUser implements Action {
  readonly type = AdminStoreActionTypes.ADD_ADMIN_USER;
  constructor(public payload: any) { }
}
export class AddAdminUserSuccess implements Action {
  readonly type = AdminStoreActionTypes.ADD_ADMIN_USER_SUCCESS;
  constructor(public payload: any) { }
}
export class AddAdminUserFail implements Action {
  readonly type = AdminStoreActionTypes.ADD_ADMIN_USER_FAIL;
  constructor(public error: any) { }
}
export class DeleteAdminUser implements Action {
  readonly type = AdminStoreActionTypes.DELETE_ADMIN_USER;
  constructor(public payload: any) { }
}
export class DeleteAdminUserSuccess implements Action {
  readonly type = AdminStoreActionTypes.DELETE_ADMIN_USER_SUCCESS;
  constructor(public payload: any) { }
}
export class DeleteAdminUserFail implements Action {
  readonly type = AdminStoreActionTypes.DELETE_ADMIN_USER_FAIL;
  constructor(public error: any) { }
}

export type AdminStoreActions = LoadAdminUsers
| LoadAdminUsersSuccess
| LoadAdminUsersFail
| AddAdminUser
| AddAdminUserSuccess
| AddAdminUserFail
| DeleteAdminUser
| DeleteAdminUserSuccess
| DeleteAdminUserFail;
