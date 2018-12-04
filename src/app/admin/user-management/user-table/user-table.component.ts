import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  dataSource = [];

  displayedColumns = ['email', 'firstName', 'lastName', 'isAdmin', 'actions'];

  constructor() { }

  ngOnInit() {
  }

}
