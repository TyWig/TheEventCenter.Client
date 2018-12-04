import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private snackbar: MatSnackBar,
    private authService: AuthService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            this.router.navigate(['login']);
            break;
          case 403:
            this.router.navigate(['unauthorized']);
            break;
          case 500:
            this.showSnackbar(error);
            break;
          default:
            this.showSnackbar(error);
            console.error('Error: ', error);
        }
        return throwError(error);
      }),
    );
  }

  private showSnackbar(error: HttpErrorResponse) {
    const position: MatSnackBarVerticalPosition = 'top';
    this.snackbar.open(error.message, 'Ok', {
      duration: 3000,
      verticalPosition: position,
    });
  }
}
