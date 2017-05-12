import { LoginComponent } from './../../routes/login/login.component';
import { HomeComponent } from './../../routes/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'operations',
    loadChildren: './../../routes/operations/operations.module#OperationsModule'
  },
  {
    path: 'users',
    loadChildren: './../../routes/users/users.module#UsersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
