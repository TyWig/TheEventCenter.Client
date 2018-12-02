import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'event-management',
    loadChildren: 'src/app/admin/event-management/event-management.module#EventManagementModule'
  },
  {
    path: 'user-management',
    loadChildren: 'src/app/admin/user-management/user-management.module#UserManagementModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
