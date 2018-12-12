import { Action } from '@ngrx/store';
import { UserActionTypes, UserStoreActions } from './user-store.actions';
import { initialState, State } from './state';

export function reducer(state = initialState, action: UserStoreActions): State {
  switch (action.type) {

    case UserActionTypes.LOAD_USER:
      return {
        ...state,
      };
    case UserActionTypes.LOAD_USER_SUCCESS:
      return {
        ...state,
      };
    case UserActionTypes.LOAD_USER_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
