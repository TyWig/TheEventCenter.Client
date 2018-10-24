import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { userSelectors } from './store/user-store';
import { AuthService } from './core/auth/auth.service';
import { authSelectors } from './store/auth-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userState$: Observable<any> = of({
    name: 'Tyler Wigington'
  });
  today = new Date();
  title = 'app';
  isAuthenticated = false;

  constructor(
    private store: Store<any>,
    private authService: AuthService
  ) {
    this.getToken();
    this.subscribeToAuthenticated();
  }

  ngOnInit() {
  }

  private getToken() {
    this.authService.getToken();
  }

  private subscribeToAuthenticated() {
    this.store.select(authSelectors.selectIsAuthenticated).subscribe(auth => {
      this.isAuthenticated = auth;
    });
  }
}
