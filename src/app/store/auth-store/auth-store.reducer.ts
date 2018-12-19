import { Action } from '@ngrx/store';
import { AuthStoreActions, AuthStoreActionTypes } from './auth-store.actions';
import { State, initialState } from './state';

export function reducer(state = initialState, action: AuthStoreActions): State {
  switch (action.type) {

    case AuthStoreActionTypes.LOGIN:
      return {
        ...state,
      };
    case AuthStoreActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAdmin: false,
      };
    case AuthStoreActionTypes.LOGIN_FAIL:
      return {
        ...state,
        loginErrors: action.payload,
      };

    case AuthStoreActionTypes.LOGOUT:
      return {
        ...state,
      };
    case AuthStoreActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isAdmin: false,
      };
    case AuthStoreActionTypes.LOGOUT_FAIL:
      return {
        ...state,
      };

    case AuthStoreActionTypes.REGISTER:
      return {
        ...state,
      };
    case AuthStoreActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAdmin: false,
      };
    case AuthStoreActionTypes.REGISTER_FAIL:
      return {
        ...state,
        registerErrors: action.payload,
      };

    default:
      return state;
  }
}
