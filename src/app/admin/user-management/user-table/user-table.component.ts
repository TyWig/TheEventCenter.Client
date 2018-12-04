import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  @Input() dataSource;
  @Output() deleteUser: EventEmitter<any> = new EventEmitter();
  @Output() editUser: EventEmitter<any> = new EventEmitter();

  displayedColumns = ['email', 'firstName', 'lastName', 'isAdmin', 'actions'];

  constructor() { }

  ngOnInit() {
  }

  delete(email: string) {
    this.deleteUser.emit(email);
  }

  edit(user: any) {
    this.editUser.emit(user);
  }

}
