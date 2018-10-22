import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    MaterialModule
  ],
  declarations: [LandingContainerComponent]
})
export class LandingModule { }
