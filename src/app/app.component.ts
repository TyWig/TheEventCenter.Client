import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { userSelectors } from './store/user-store';
import { AuthService } from './core/auth/auth.service';
import { authSelectors } from './store/auth-store';
import { LoadUser } from './store/user-store/user-store.actions';
import { User } from './shared/models/user';
import { Logout } from './store/auth-store/auth-store.actions';
import { MatDialog, DialogPosition } from '@angular/material';
import { ConfirmationComponent } from './shared/confirmation/confirmation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  today = new Date();
  title = 'app';
  isAuthenticated = false;
  currentUser$: Observable<any>;

  constructor(
    private store: Store<any>,
    private authService: AuthService,
    private modal: MatDialog,
  ) {
    this.initAuth();
    this.subscribeToAuthenticated();
  }

  ngOnInit() {
    this.currentUser$ = this.store.select(userSelectors.selectUser);
  }

  logout() {
    const dialogPosition: DialogPosition = {
      top: '0',
    };
    const modalRef = this.modal.open(ConfirmationComponent, {
      data: { title: 'Are you sure you want to logout?' },
      position: dialogPosition,
    });

    modalRef.afterClosed().subscribe((response) => {
      if (response) {
        this.store.dispatch(new Logout());
      }
    });
  }

  private initAuth() {
    this.authService.initAuth();
  }

  private subscribeToAuthenticated() {
    this.store.select(authSelectors.selectIsAuthenticated).subscribe((auth) => {
      this.isAuthenticated = auth;
    });
  }
}
