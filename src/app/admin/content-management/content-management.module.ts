import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentManagementRoutingModule } from './content-management-routing.module';
import { ContentManagementContainerComponent } from './content-management-container/content-management-container.component';

@NgModule({
  declarations: [ContentManagementContainerComponent],
  imports: [
    CommonModule,
    ContentManagementRoutingModule,
  ],
})
export class ContentManagementModule { }
