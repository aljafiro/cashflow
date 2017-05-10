import { Operation } from './../data/operation.model';
import { OperationsService } from './../data/operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jfr-new',
  template: `
    <p>
      new Works!
    </p>
    <form class="container">
      <label for="amount">Amount</label>
      <input  name="amount" [(ngModel)]="operation.amount" type="number"/>
      <button (click)="saveOperation()">Save</button>
    </form>
  `,
  styles: []
})

export class NewComponent implements OnInit {
  public operation : Operation;
  constructor(public operationsService: OperationsService) { }

  ngOnInit() {
    this.createNewOperation();
  }

  createNewOperation() {
    this.operation = this.operationsService.newOperation();
  }

  saveOperation() {
    this.operationsService.saveOperation(this.operation);
    this.createNewOperation();
  }
}
