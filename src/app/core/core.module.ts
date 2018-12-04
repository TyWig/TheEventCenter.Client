import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { environment as env } from '../../environments/environment';
import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.intercepter';

export function jwtOptionsFactory(authService) {
  return {
    tokenGetter: () => {
      return authService.getToken();
    },
    whitelistedDomains: ['localhost:5000', 'localhost:5001'],
    blacklistedRoutes: ['localhost:5000/api/auth/login'],
  };
}

@NgModule({
  imports: [
    CommonModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [AuthService],
      },
    }),
  ],
  providers: [
    AuthService,
    LocalStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
})
export class CoreModule { }
