import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { TestingModule } from '@testing';
import { SnackbarService } from '../../facade/snackbar.service';
import { StateWithSnackbar } from '../../store/snackbar-state';

import { SnackComponent } from './snack.component';

describe('SnackComponent', () => {
  let component: SnackComponent;
  let fixture: ComponentFixture<SnackComponent>;
  let store: Store<StateWithSnackbar>;
  let service: SnackbarService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TestingModule, StoreModule.forRoot({})],
        declarations: [SnackComponent],
      }).compileComponents();
      service = TestBed.inject(SnackbarService);
      store = TestBed.inject(Store);
      spyOn(service, 'removeSnack').and.stub();
      spyOn(service, 'getSnackbar').and.stub();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.snack = { id: '123', text: 'test', title: 'test', theme: 'light', delay: 3000 };
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.light'))).toBeTruthy();
  });

  it('должен закрываться', () => {
    component.snack = { id: '123', text: 'test', title: 'test', theme: 'light', delay: 3000 };
    fixture.detectChanges();
    fixture.debugElement.nativeElement.querySelector('.remove-btn').click();
    expect(service.removeSnack).toHaveBeenCalledWith('123');
  });

  it('должен загружаться кастомный темплейт', () => {
    component.snack = { id: '123', template: 'test', theme: 'light', delay: 3000 };
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('sd-snackbar-templates')).toBeTruthy();
  });
});
