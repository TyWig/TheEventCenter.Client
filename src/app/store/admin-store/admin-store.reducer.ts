import { Action } from '@ngrx/store';
import { AdminStoreActions, AdminStoreActionTypes } from './admin-store.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: AdminStoreActions): State {
  switch (action.type) {

    case AdminStoreActionTypes.LoadAdminStores:
      return state;


    default:
      return state;
  }
}
