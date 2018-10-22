import { Action } from '@ngrx/store';
import { UserActionTypes, UserStoreActions } from './user-store.actions';
import { initialState, State } from './state';

export function reducer(state = initialState, action: UserStoreActions): State {
  switch (action.type) {

    case UserActionTypes.LOGIN:
      return { ...state };
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state
      };
    case UserActionTypes.LOGIN_SUCCESS:
      return { ...state };
    default:
      return state;
  }
}
