import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '@testing';
import { of } from 'rxjs';
import { SnackbarService } from '../../facade/snackbar.service';

import { SnackbarComponent } from './snackbar.component';

describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;
  let service: SnackbarService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TestingModule],
        declarations: [SnackbarComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SnackbarService);
    spyOn(service, 'getSnackbar').and.returnValue(
      of([{ id: '1', text: 'test', title: 'test', delay: 500, theme: 'yellow' }])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
