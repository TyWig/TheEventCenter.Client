import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserManagementModalComponent } from '../user-management-modal/user-management-modal.component';

@Component({
  selector: 'app-user-management-container',
  templateUrl: './user-management-container.component.html',
  styleUrls: ['./user-management-container.component.css']
})
export class UserManagementContainerComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  addUser(userToEdit: any) {
    let dialogRef = this.dialog.open(UserManagementModalComponent, {
      
    });

    dialogRef.afterClosed().subscribe(value => {
      console.log(value);
    });
  }

}
