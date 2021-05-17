import { Action } from '@ngrx/store';
import { Snack } from '../../models/snackbar.model';

export const SET_SNACK = '[Snackbar] Set New Snack';
export const ADD_SNACK = '[Snackbar] Add Snack';
export const REMOVE_SNACK = '[Snackbar] Remove Snack';

export class SetSnack implements Action {
  readonly type = SET_SNACK;
  constructor(public payload: Snack) {}
}

export class AddSnack implements Action {
  readonly type = ADD_SNACK;
  constructor(public payload: Snack) {}
}

export class RemoveSnack implements Action {
  readonly type = REMOVE_SNACK;
  constructor(public payload: { id: string }) {}
}

export type SnackbarActions = SetSnack | AddSnack | RemoveSnack;
