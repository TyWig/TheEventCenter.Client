import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUserStore from './user-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserStoreEffects } from './user-store.effects';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('user', fromUserStore.reducer),
    EffectsModule.forFeature([UserStoreEffects]),
  ],
  declarations: [],
})
export class UserStoreModule { }
