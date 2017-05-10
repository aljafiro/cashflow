import { Operation } from './../data/operation.model';
import { OperationsService } from './../data/operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jfr-list',
  template: `
    <div *ngIf="operations.length == 0"> No hay movimientos</div>
    <div *ngIf="operations.length > 0" [ngClass]="{pocas:operations.length<=3,muchas:operations.length>3}"> 
      Movimientos
    </div>

        {{operations | json}}
    <ul class="container">
      <jfr-row *ngFor="let operation of operations" [operation]="operation" (delete)="onDelete(operation)">
      </jfr-row>
    </ul>
  `,
  styles: [`
    .pocas {
      color: green;
    }
    .muchas {
      color: red;
    }
  `]
})
export class ListComponent implements OnInit {
  public operations : Operation[];
  constructor(public operationsService : OperationsService) { }

  ngOnInit() {
    this.getOperationList();
  }

  getOperationList() {
    this.operations = this.operationsService.getOperations();
  }

  onDelete(operation) {
    this.operationsService.deleteOperation(operation);
    this.getOperationList();
  }

}
