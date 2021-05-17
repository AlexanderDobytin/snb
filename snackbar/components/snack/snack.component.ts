import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CUSTOM_ICON_TYPE } from '@core/enums';
import { SnackbarService } from '../../facade/snackbar.service';
import { Snack } from '../../models/snackbar.model';

@Component({
  selector: 'sd-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackComponent {
  @Input() snack: Snack;

  iconType = CUSTOM_ICON_TYPE;

  constructor(private snackbarService: SnackbarService) {}

  close(): void {
    this.snackbarService.removeSnack(this.snack.id);
  }
}
