import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { MatDialog } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(
    private jwtHelperService: JwtHelperService,
    private dialog: MatDialog,
    private store: Store<any>
  ) {
  }

  login(response) {
    console.log(response);
  }

}
