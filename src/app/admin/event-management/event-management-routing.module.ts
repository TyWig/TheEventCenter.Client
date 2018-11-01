import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventManagementContainerComponent } from './event-management-container/event-management-container.component';

const routes: Routes = [
  {
    path: '',
    component: EventManagementContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventManagementRoutingModule { }
