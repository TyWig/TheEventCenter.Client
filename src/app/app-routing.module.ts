import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/landing/landing.module#LandingModule',
  },
  {
    path: 'register',
    loadChildren: 'src/app/register/register.module#RegisterModule',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    data: {
      title: '404: Page Not Found'
    }
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
