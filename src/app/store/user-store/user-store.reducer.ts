import { Action } from '@ngrx/store';
import { UserStoreActions, UserStoreActionTypes } from './user-store.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: UserStoreActions): State {
  switch (action.type) {

    case UserStoreActionTypes.LoadUserStores:
      return state;


    default:
      return state;
  }
}
