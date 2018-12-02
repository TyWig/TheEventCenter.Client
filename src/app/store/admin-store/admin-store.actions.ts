import { Action } from '@ngrx/store';

export enum AdminStoreActionTypes {
  LoadAdminStores = '[AdminStore] Load AdminStores'
}

export class LoadAdminStores implements Action {
  readonly type = AdminStoreActionTypes.LoadAdminStores;
}

export type AdminStoreActions = LoadAdminStores;
