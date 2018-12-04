import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';

export const getUsers = (state: State) => state.users;

// tslint:disable-next-line:max-line-length
export const selectAdminState: MemoizedSelector<object, State> = createFeatureSelector<State>('admin');
// tslint:disable-next-line:max-line-length
export const selectAdminUsers: MemoizedSelector<object, any[]> = createSelector(selectAdminState, getUsers);
