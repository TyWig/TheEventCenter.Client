import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CalendarEvent } from 'calendar-utils';

export interface RegistrationModalData {
  date: Date;
  events: CalendarEvent[];
}

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css'],
})
export class RegistrationModalComponent implements OnInit {
  myData: RegistrationModalData;

  constructor(
    public dialogRef: MatDialogRef<RegistrationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RegistrationModalData,
  ) {
    this.myData = this.data;
  }

  ngOnInit() {
    console.log(this.myData);
  }

}
