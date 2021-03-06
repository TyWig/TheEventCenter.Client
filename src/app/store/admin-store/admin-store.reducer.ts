import { AdminStoreActions, AdminStoreActionTypes } from './admin-store.actions';
import { initialState, State } from './state';

export function reducer(state = initialState, action: AdminStoreActions): State {
  switch (action.type) {
    case AdminStoreActionTypes.LOAD_ADMIN_USERS:
      return state;
    case AdminStoreActionTypes.LOAD_ADMIN_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case AdminStoreActionTypes.LOAD_ADMIN_USERS_FAIL:
      return state;
    case AdminStoreActionTypes.ADD_ADMIN_USER:
      return state;
    case AdminStoreActionTypes.ADD_ADMIN_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, ...[action.payload]],
      };
    case AdminStoreActionTypes.ADD_ADMIN_USER_FAIL:
      return state;
    case AdminStoreActionTypes.DELETE_ADMIN_USER:
      return state;
    case AdminStoreActionTypes.DELETE_ADMIN_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(u => u.email !== action.payload),
      };
    case AdminStoreActionTypes.DELETE_ADMIN_USER_FAIL:
      return state;
    default:
      return state;
  }
}
