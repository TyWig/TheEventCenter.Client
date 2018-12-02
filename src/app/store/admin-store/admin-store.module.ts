import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as adminStore from './admin-store.reducer';
import { AdminStoreEffects } from './admin-store.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('admin', adminStore.reducer),
    EffectsModule.forFeature([AdminStoreEffects])
  ],
  declarations: []
})
export class AdminStoreModule { }
