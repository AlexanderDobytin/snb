import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestingModule } from '@testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { Snack } from '../../models/snackbar.model';
import { SnackbarActions } from '../actions';
import { SnackbarEffects } from './snackbar.effect';

const snack: Snack = { id: '111', title: 'Test', theme: 'dark', delay: 3000 };

describe('Snackbar Effects', () => {
  let actions$: Observable<SnackbarActions.AddSnack | SnackbarActions.SetSnack>;
  let effects: SnackbarEffects;
  let testScheduler: TestScheduler; // <-- instance of the test scheduler

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [SnackbarEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(SnackbarEffects);
  });

  it('addSnack', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;
      const action = new SnackbarActions.SetSnack(snack);
      actions$ = cold('-a', { a: action });
      const completion = new SnackbarActions.AddSnack(snack);
      expectObservable(effects.addSnack$).toBe('-b', {
        b: completion,
      });
    });
  });

  it('closeSnack', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;
      const action = new SnackbarActions.AddSnack(snack);
      actions$ = cold('-a', { a: action });
      const completion = new SnackbarActions.RemoveSnack({ id: '111' });
      expectObservable(effects.closeSnack$).toBe('3s -b', {
        b: completion,
      });
    });
  });
});
