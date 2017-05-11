import { UsersService } from './../users/data/users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { RowComponent } from './list/row/row.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent, NewComponent, ListComponent, RowComponent],
  providers: [UsersService]
})
export class UsersModule { }
