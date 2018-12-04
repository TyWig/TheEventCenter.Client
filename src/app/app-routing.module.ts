import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/home/home.module#HomeModule',
  },
  {
    path: 'admin',
    loadChildren: 'src/app/admin/admin.module#AdminModule',
  },
  {
    path: 'register',
    loadChildren: 'src/app/register/register.module#RegisterModule',
  },
  {
    path: 'events',
    loadChildren: 'src/app/event/event.module#EventModule',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    data: {
      title: '404: Page Not Found',
    },
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
