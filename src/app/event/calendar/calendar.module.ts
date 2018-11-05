import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarContainerComponent } from './calendar-container/calendar-container.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { CalendarModule, DateAdapter, CalendarCommonModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MaterialModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CalendarCommonModule
  ],
  declarations: [CalendarContainerComponent, CalendarComponent]
})
export class AppCalendarModule { }
