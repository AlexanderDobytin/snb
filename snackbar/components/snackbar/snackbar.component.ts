import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { SnackbarService } from '../../facade/snackbar.service';
import { Snack } from '../../models/snackbar.model';

@Component({
  selector: 'sd-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarComponent implements OnInit {
  bar$: Observable<Snack[]>;

  constructor(private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.bar$ = this.snackbarService.getSnackbar();
  }
}
