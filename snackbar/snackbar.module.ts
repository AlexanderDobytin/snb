import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SnackComponent } from './components/snack/snack.component';
import { SnackbarStoreModule } from './store/snackbar-store.module';
import { SnackbarTemplatesComponent } from './components/snackbar-templates/snackbar-templates.component';
import { CustomSnackComponent } from './components/snackbar-templates/custom-snack/custom-snack.component';
import { IconModule } from '@spartacus/storefront';
import { SnackbarDirective } from './directive/ref.directive';

@NgModule({
  declarations: [SnackbarComponent, SnackComponent, SnackbarTemplatesComponent, SnackbarDirective],
  imports: [CommonModule, SnackbarStoreModule, IconModule],
  exports: [SnackbarComponent],
  entryComponents: [CustomSnackComponent],
})
export class SnackbarModule {}
