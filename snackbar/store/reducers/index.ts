import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { SnackbarState } from '../snackbar-state';
import { reducer as snackbarReducer } from './snackbar.reducer';
export type SnackReducers = SnackbarState;

export function getReducers(): ActionReducerMap<SnackReducers> {
  return {
    bar: snackbarReducer,
  };
}

export const reducerToken: InjectionToken<ActionReducerMap<SnackReducers>> = new InjectionToken<
  ActionReducerMap<SnackReducers>
>('CartReducers');

export const reducerProvider: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};
