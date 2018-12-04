import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserManagementModalComponent } from '../user-management-modal/user-management-modal.component';
import { Store } from '@ngrx/store';
import { LoadAdminUsers } from 'src/app/store/admin-store/admin-store.actions';
import { Observable } from 'rxjs';
import { adminSelectors } from 'src/app/store/admin-store';

@Component({
  selector: 'app-user-management-container',
  templateUrl: './user-management-container.component.html',
  styleUrls: ['./user-management-container.component.css'],
})
export class UserManagementContainerComponent implements OnInit {
  users$: Observable<any[]>;

  constructor(
    private dialog: MatDialog,
    private store: Store<any>,
  ) {
    this.store.dispatch(new LoadAdminUsers());
  }

  ngOnInit() {
    this.users$ = this.store.select(adminSelectors.selectAdminUsers);
  }

  addUser(userToEdit: any) {
    const dialogRef = this.dialog.open(UserManagementModalComponent, {
      data: userToEdit,
    });

    dialogRef.afterClosed().subscribe((value) => {
      console.log(value);
    });
  }

}
