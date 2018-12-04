import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserManagementModalComponent } from '../user-management-modal/user-management-modal.component';
import { Store } from '@ngrx/store';
import { LoadAdminUsers, AddAdminUser, DeleteAdminUser } from 'src/app/store/admin-store/admin-store.actions';
import { Observable } from 'rxjs';
import { adminSelectors } from 'src/app/store/admin-store';
import { ConfirmationComponent } from 'src/app/shared/confirmation/confirmation.component';

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
    const dialogRef = this.dialog.open(UserManagementModalComponent);
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.store.dispatch(new AddAdminUser(value));
      }
    });
  }

  deleteUser(userEmail) {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: { title: 'Are you sure you want to delete this user?' },
    });
    dialogRef.afterClosed().subscribe((saidYes) => {
      if (saidYes) {
        this.store.dispatch(new DeleteAdminUser(userEmail));
      }
    });

  }

  editUser(user) {
    const dialogRef = this.dialog.open(UserManagementModalComponent, {
      data: user,
    });

    dialogRef.afterClosed().subscribe((updatedUser) => {
      if (updatedUser) {
        console.log(updatedUser);
        // this.store.dispatch(new UpdateAdminUser(updatedUser));
      }
    });
  }

}
