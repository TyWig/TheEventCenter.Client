import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as authStore from './auth-store.reducer';
import { AuthStoreEffects } from './auth-store.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', authStore.reducer),
    EffectsModule.forFeature([AuthStoreEffects]),
  ],
  declarations: [],
})
export class AuthStoreModule { }
