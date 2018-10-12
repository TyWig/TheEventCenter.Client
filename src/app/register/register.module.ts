import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterContainerComponent } from './register-container/register-container.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule
  ],
  declarations: [RegisterContainerComponent, RegisterFormComponent]
})
export class RegisterModule { }
