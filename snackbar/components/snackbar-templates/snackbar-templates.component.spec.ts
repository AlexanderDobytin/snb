import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TestingModule } from '@testing';
import { SnackbarDirective } from '../../directive/ref.directive';

import { SnackbarTemplatesComponent } from './snackbar-templates.component';

describe('SnackbarTemplatesComponent', () => {
  let component: SnackbarTemplatesComponent;
  let fixture: ComponentFixture<SnackbarTemplatesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TestingModule],
        declarations: [SnackbarTemplatesComponent, SnackbarDirective],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarTemplatesComponent);
    component = fixture.componentInstance;
    component.template = 'test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Должен рендерится тестовый компонент', () => {
    expect(fixture.debugElement.nativeElement.querySelector('sd-custom-snack')).toBeTruthy();
  });
});
