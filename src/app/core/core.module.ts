import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { environment as env } from '../../environments/environment';
import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.intercepter';
import { TokenService } from './auth/token.service';

export function jwtOptionsFactory(tokenService: TokenService) {
  return {
    tokenGetter: () => {
      return tokenService.getToken();
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
        deps: [TokenService],
      },
    }),
  ],
  providers: [
    AuthService,
    LocalStorageService,
    TokenService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
})
export class CoreModule { }
