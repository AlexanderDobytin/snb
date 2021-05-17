import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sd-custom-snack',
  templateUrl: './custom-snack.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/** Тестовый кастомный компонент для  снэкбара */
export class CustomSnackComponent {
  click(): void {
    alert('alert');
  }
}
