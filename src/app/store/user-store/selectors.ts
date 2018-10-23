import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { User } from 'src/app/shared/models/user';
import { State } from './state';

const getUser = (state: State): User => state.user;
const getUserIsAuthenticated = (state: State): boolean => state.isAuthenticated;

export const selectUserState: MemoizedSelector<object, State> = createFeatureSelector<State>('user');
export const selectUser: MemoizedSelector<object, User> = createSelector(selectUserState, getUser);
export const selectUserIsAuthenticated: MemoizedSelector<object, boolean> = createSelector(selectUserState, getUserIsAuthenticated);
