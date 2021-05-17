import { SnackbarActions } from '../actions';
import { SnackbarState } from '../snackbar-state';

export const initialState: SnackbarState['bar'] = [];

export function reducer(state = initialState, action): SnackbarState['bar'] {
  switch (action.type) {
    case SnackbarActions.ADD_SNACK: {
      const snack = action.payload;

      if (!state.some((item) => item.text === snack.text)) {
        return [...state, snack];
      }

      return state;
    }

    case SnackbarActions.REMOVE_SNACK: {
      return state.filter((snack) => snack.id !== action.payload.id);
    }

    default: {
      return state;
    }
  }
}
