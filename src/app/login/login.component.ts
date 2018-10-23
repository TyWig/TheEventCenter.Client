import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Login } from '../store/user-store/user-store.actions';
import { validateAllFormFields } from '../shared/form-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>
  ) {
    this.createForm();
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
    console.log(valid);
    if (valid) {
      const value = this.form.value;
      this.store.dispatch(new Login(value));
    } else {
      validateAllFormFields(this.form);
    }
  }

}
