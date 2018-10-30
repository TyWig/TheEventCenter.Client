import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationContainerComponent } from './registration-container/registration-container.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
  declarations: [RegistrationContainerComponent, RegistrationFormComponent]
})
export class RegistrationModule { }
