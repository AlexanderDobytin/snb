import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { SNACKBAR_FEATURE, SnackbarState, StateWithSnackbar } from '../snackbar-state';

export const getSnackbarState: MemoizedSelector<StateWithSnackbar, SnackbarState> = createFeatureSelector<
  SnackbarState
>(SNACKBAR_FEATURE);

export const getSnackbar: MemoizedSelector<StateWithSnackbar, SnackbarState['bar']> = createSelector(
  getSnackbarState,
  (state) => state.bar
);
