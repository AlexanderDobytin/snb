import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Snack, SnackData } from '../models/snackbar.model';
import { SnackbarActions } from '../store/actions';
import { SnackbarSelectors } from '../store/selectors';
import { StateWithSnackbar } from '../store/snackbar-state';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(protected store: Store<StateWithSnackbar>) {}

  setSnack(snack: SnackData): void {
    const id = '_' + Math.random().toString(36).substr(2, 9);
    snack.delay = snack.delay ? snack.delay : 5000;
    snack.theme = snack.theme ? snack.theme : 'dark';
    this.store.dispatch(new SnackbarActions.SetSnack({ id: id, ...snack }));
  }

  getSnackbar(): Observable<Snack[]> {
    return this.store.pipe(select(SnackbarSelectors.getSnackbar));
  }

  removeSnack(id): void {
    this.store.dispatch(new SnackbarActions.RemoveSnack({ id }));
  }
}
