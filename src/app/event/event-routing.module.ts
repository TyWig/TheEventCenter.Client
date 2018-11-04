import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/event/calendar/calendar.module#AppCalendarModule'
  },
  {
    path: 'registration',
    loadChildren: 'src/app/event/registration/registration.module#RegistrationModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
