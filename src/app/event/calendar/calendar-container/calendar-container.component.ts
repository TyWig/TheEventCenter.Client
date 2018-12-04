import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegistrationModalComponent } from '../registration-modal/registration-modal.component';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.css']
})
export class CalendarContainerComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  dateClicked(value) {
    const dialogRef = this.dialog.open(RegistrationModalComponent, {
      data: value
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('closed boi');
    });
  }

}
