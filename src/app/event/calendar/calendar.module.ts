import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarContainerComponent } from './calendar-container/calendar-container.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MaterialModule
  ],
  declarations: [CalendarContainerComponent, CalendarComponent]
})
export class CalendarModule { }
