import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentManagementContainerComponent } from './content-management-container/content-management-container.component';

const routes: Routes = [
  {
    path: '',
    component: ContentManagementContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentManagementRoutingModule { }
