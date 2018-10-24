import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { validateAllFormFields } from '../shared/form-utils';
import { Observable } from 'rxjs';
import { authSelectors } from '../store/auth-store';
import { Login } from '../store/auth-store/auth-store.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginError$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>
  ) {
    this.createForm();
    this.loginError$ = this.store.select(authSelectors.selectLoginErrors);
  }

  ngOnInit() {
  }

  private createForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const valid = this.form.valid;
    if (valid) {
      const value = this.form.value;
      this.store.dispatch(new Login(value));
    } else {
      validateAllFormFields(this.form);
    }
  }

}
