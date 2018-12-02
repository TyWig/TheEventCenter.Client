import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  dataSource = [
    {
      firstName: 'Tyler',
      lastName: 'Wigington',
      email: 'tylerwigington@boisestate.edu',
      isAdmin: true
    },
    {
      firstName: 'Chad',
      lastName: 'Wigington',
      email: 'chadwigington@boisestate.edu',
      isAdmin: false
    },
    {
      firstName: 'Ashlin',
      lastName: 'Wigington',
      email: 'ashlinwigington@boisestate.edu',
      isAdmin: false
    },
    {
      firstName: 'Traci',
      lastName: 'Wigington',
      email: 'traciwigington@boisestate.edu',
      isAdmin: true
    },
  ]

  displayedColumns = ['email', 'firstName', 'lastName', 'isAdmin', 'actions'];

  constructor() { }

  ngOnInit() {
  }

}
