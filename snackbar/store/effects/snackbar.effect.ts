import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { delay, filter, map, switchMap } from 'rxjs/operators';
import { SnackbarService } from '../../facade/snackbar.service';
import { SnackbarActions } from '../actions';

@Injectable()
export class SnackbarEffects {
  @Effect()
  addSnack$: Observable<SnackbarActions.AddSnack> = this.actions$.pipe(
    ofType(SnackbarActions.SET_SNACK),
    map((action: SnackbarActions.SetSnack) => action.payload),
    filter((snack) => !!snack.delay),
    map((snack) => new SnackbarActions.AddSnack(snack))
  );

  @Effect()
  closeSnack$: Observable<SnackbarActions.RemoveSnack> = this.actions$.pipe(
    ofType(SnackbarActions.ADD_SNACK),
    map((action: SnackbarActions.AddSnack) => action.payload),
    filter((snack) => !!snack.delay),
    switchMap((data) => {
      return of(data).pipe(
        delay(data.delay),
        map(() => new SnackbarActions.RemoveSnack({ id: data.id }))
      );
    })
  );

  constructor(private actions$: Actions, private snackbarService: SnackbarService) {}
}
