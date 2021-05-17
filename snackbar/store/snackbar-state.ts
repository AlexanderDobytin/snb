import { Snack } from '../models/snackbar.model';

export const SNACKBAR_FEATURE = 'snackbar';

export interface StateWithSnackbar {
  [SNACKBAR_FEATURE]: SnackbarState;
}

export interface SnackbarState {
  bar: Snack[];
}
