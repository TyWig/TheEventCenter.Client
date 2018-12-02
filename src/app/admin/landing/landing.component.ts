import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  buttons = [
    {
      title: 'Event Management',
      link: '/admin/event-management',
      icon: 'event_available'
    },
    {
      title: 'Manage Admin',
      link: '/admin/user-management',
      icon: 'event_available'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
