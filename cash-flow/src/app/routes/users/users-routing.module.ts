import { UsersComponent } from './users.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: 'list',
        component: ListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
