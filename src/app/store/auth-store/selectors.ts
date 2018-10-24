import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';

const getIsAuthenticated = (state: State): boolean => state.isAuthenticated;
const getLoginErrors = (state: State): any => state.loginErrors;
const getRegisterErrors = (state: State): any => state.registerErrors;

export const selectAuthState: MemoizedSelector<object, State> = createFeatureSelector<State>('auth');
export const selectIsAuthenticated: MemoizedSelector<object, boolean> = createSelector(selectAuthState, getIsAuthenticated);
export const selectLoginErrors: MemoizedSelector<object, any> = createSelector(selectAuthState, getLoginErrors);
export const selectRegisterErrors: MemoizedSelector<object, any> = createSelector(selectAuthState, getRegisterErrors);
