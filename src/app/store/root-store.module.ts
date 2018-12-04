import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { UserStoreModule } from './user-store';
import { AuthStoreModule } from './auth-store';
import { AdminStoreModule } from './admin-store';

@NgModule({
  imports: [
    CommonModule,
    UserStoreModule,
    AuthStoreModule,
    AdminStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  declarations: [],
})
export class RootStoreModule { }
