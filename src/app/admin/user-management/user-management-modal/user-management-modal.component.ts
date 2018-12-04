import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, Form, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { validateAllFormFields } from 'src/app/shared/form-utils';

@Component({
  selector: 'app-user-management-modal',
  templateUrl: './user-management-modal.component.html',
  styleUrls: ['./user-management-modal.component.css'],
})
export class UserManagementModalComponent implements OnInit {
  @Input() userToEdit;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UserManagementModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.initForm();
  }

  ngOnInit() {

  }

  private initForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      isAdmin: [false],
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  add() {
    const valid = this.form.valid;
    if (valid) {
      this.dialogRef.close(this.form.value);
    } else {
      validateAllFormFields(this.form);
    }
  }

}
