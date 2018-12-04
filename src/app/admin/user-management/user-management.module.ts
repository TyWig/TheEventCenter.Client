import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementContainerComponent } from './user-management-container/user-management-container.component';
import { UserTableComponent } from './user-table/user-table.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { UserManagementModalComponent } from './user-management-modal/user-management-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MaterialModule,
    SharedModule,
  ],
  declarations: [
    UserManagementContainerComponent,
    UserTableComponent,
    UserManagementModalComponent,
  ],
  entryComponents: [
    UserManagementModalComponent,
  ],
})
export class UserManagementModule { }
