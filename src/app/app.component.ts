import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { userSelectors } from './store/user-store';
import { AuthService } from './core/auth/auth.service';
import { authSelectors } from './store/auth-store';
import { LoadUser } from './store/user-store/user-store.actions';
import { User } from './shared/models/user';

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
  ) {
    this.initAuth();
    this.subscribeToAuthenticated();
  }

  ngOnInit() {
    this.currentUser$ = this.store.select(userSelectors.selectUser);
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
