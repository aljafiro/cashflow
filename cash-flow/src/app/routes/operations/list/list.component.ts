import { Operation } from './../data/operation.model';
import { OperationsService } from './../data/operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jfr-list',
  template: `
    <header>
      <h5>List of operations</h5>
    </header>
    <main>
      <ul class="container">
        <jfr-row *ngFor="let operation of operations" 
            [operation]="operation" 
            (delete)="onDelete(operation)">
        </jfr-row>
      </ul>
    </main>
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
    this.operationsService
      .getOperations$()
      .subscribe(
          operations => this.operations = operations,
          error => console.log(error)
        );
  }

  onDelete(operation) {
    this.operationsService
      .deleteOperation$(operation)
      .subscribe(r => this.getOperationList());
  }
}