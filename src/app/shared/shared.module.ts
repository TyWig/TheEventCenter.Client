import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    ConfirmationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ConfirmationComponent,
  ],
  entryComponents: [ConfirmationComponent],
})
export class SharedModule { }
