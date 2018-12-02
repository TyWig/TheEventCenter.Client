import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';


export const selectAuthState: MemoizedSelector<object, State> = createFeatureSelector<State>('admin');