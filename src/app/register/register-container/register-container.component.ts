import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {
  @ViewChild(RegisterFormComponent) registerForm: RegisterFormComponent;

  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
  }

  register() {
    const value = this.registerForm.getValue();
    if (value) {
      // this.store.dispatch(new RegisterUser(value));
    }
  }

}
