import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { authSelectors } from 'src/app/store/auth-store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Register } from 'src/app/store/auth-store/auth-store.actions';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {
  @ViewChild(RegisterFormComponent) registerForm: RegisterFormComponent;
  registerErrors$: Observable<any[]>;

  constructor(
    private store: Store<any>,
  ) {
    this.registerErrors$ = this.store.select(authSelectors.selectRegisterErrors);
  }

  ngOnInit() {
  }

  register() {
    const value = this.registerForm.getValue();
    if (value) {
      this.store.dispatch(new Register(value));
    }
  }

}
