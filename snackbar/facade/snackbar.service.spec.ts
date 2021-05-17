import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TestingModule } from '@testing';

import { StateWithSnackbar } from '../store/snackbar-state';

import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
  let service: SnackbarService;
  let store: Store<StateWithSnackbar>;
  let storeSpy: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule, StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [SnackbarService],
    });
    store = TestBed.inject(Store);
    storeSpy = spyOn(store, 'dispatch').and.stub();
    service = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Должен установить снэк с ид, темой и делеем', () => {
    service.setSnack({ title: 'test', text: 'test' });
    const payload = storeSpy.calls.argsFor(0)[0].payload;
    expect(payload.delay).toBe(5000);
    expect(!!payload.id).toBeTruthy();
    expect(payload.theme).toBe('dark');
    expect(payload.title).toBe('test');
    expect(payload.text).toBe('test');
  });
});
