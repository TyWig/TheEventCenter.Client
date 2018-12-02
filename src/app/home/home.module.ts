import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './home-container/home-container.component';
import { MaterialModule } from '../shared/material.module';
import {SlideshowModule} from 'ng-simple-slideshow';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SlideshowModule
  ],
    declarations: [HomeContainerComponent]
})
export class HomeModule { }
