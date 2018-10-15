import { Action } from '@ngrx/store';

export enum UserStoreActionTypes {
  LoadUserStores = '[UserStore] Load UserStores'
}

export class LoadUserStores implements Action {
  readonly type = UserStoreActionTypes.LoadUserStores;
}

export type UserStoreActions = LoadUserStores;
