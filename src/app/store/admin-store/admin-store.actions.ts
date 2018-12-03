import { Action } from '@ngrx/store';

export enum AdminStoreActionTypes {
  LOAD_ADMIN_USERS = '[AdminStore] Load AdminUsers',
  LOAD_ADMIN_USERS_SUCCESS = '[AdminStore] Load AdminUsers Success',
  LOAD_ADMIN_USERS_FAIL = '[AdminStore] Load AdminUsers Fail',
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

export type AdminStoreActions = LoadAdminUsers
| LoadAdminUsersSuccess
| LoadAdminUsersFail;
