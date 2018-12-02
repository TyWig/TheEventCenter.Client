import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Form, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-management-modal',
  templateUrl: './user-management-modal.component.html',
  styleUrls: ['./user-management-modal.component.css']
})
export class UserManagementModalComponent implements OnInit {
  @Input() userToEdit;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.initForm();
  }

  ngOnInit() {

  }

  private initForm() {
    this.form = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'isAdmin': ['', Validators.required]
    });
  }

}
