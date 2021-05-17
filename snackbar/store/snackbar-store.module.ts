import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effects } from './effects';
import { reducerProvider, reducerToken } from './reducers';
import { SNACKBAR_FEATURE } from './snackbar-state';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(SNACKBAR_FEATURE, reducerToken), EffectsModule.forFeature(effects)],
  providers: [reducerProvider],
})
export class SnackbarStoreModule {}
