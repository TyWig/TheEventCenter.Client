import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  buttons = [
    {
      title: 'Event Management',
      link: '/admin/event-management',
      icon: 'event_available',
    },
    {
      title: 'Manage Admin',
      link: '/admin/user-management',
      icon: 'person_add',
    },
    {
      title: 'Content Management',
      link: '/admin/user-management',
      icon: 'build',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
