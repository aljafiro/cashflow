import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsComponent } from './operations.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    OperationsRoutingModule
  ],
  declarations: [OperationsComponent, NewComponent, ListComponent]
})
export class OperationsModule { }
