import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { User } from 'src/app/shared/models/user';
import { State } from './state';

const getUser = (state: State): User => state.user;

export const selectUserState: MemoizedSelector<object, State> = createFeatureSelector<State>('user');
export const selectUser: MemoizedSelector<object, User> = createSelector(selectUserState, getUser);
