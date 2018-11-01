import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventManagementRoutingModule } from './event-management-routing.module';
import { EventManagementContainerComponent } from './event-management-container/event-management-container.component';

@NgModule({
  imports: [
    CommonModule,
    EventManagementRoutingModule
  ],
  declarations: [EventManagementContainerComponent]
})
export class EventManagementModule { }
