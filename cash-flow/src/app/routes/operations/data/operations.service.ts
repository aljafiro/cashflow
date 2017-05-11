import { Operation } from './operation.model';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OperationsService {

  private operations: Operation[];
  private operationsCount$: BehaviorSubject<number>;

  constructor() {
    this.operations = [];
    this.operationsCount$ = new BehaviorSubject(0);
    this.emitOperationCount();
  }

  private cloneOperation(originalOperation: Operation): Operation{
    return Object.assign({}, originalOperation);
  }

  getOperations() : Operation[] {
    return this.operations;
  }

  newOperation() : Operation {
    return new Operation(new Date(), 0, "", 1, "");
  }

  saveOperation(originalOperation: Operation) : Operation {
    const targetOperation = this.cloneOperation(originalOperation);
    targetOperation._id = new Date().getTime().toString();
    this.operations.push(targetOperation);
    this.emitOperationCount();
    return targetOperation;
  }

  deleteOperation(operation: Operation) {
    let index: number = this.operations.indexOf(operation);
    if (index !== -1) {
      this.operations.splice(index, 1);
      this.emitOperationCount();
    }
  }

  getOperationsCount$(): Observable<number> {
    return this.operationsCount$.asObservable();
  }

  private emitOperationCount() {
    this.operationsCount$.next(this.operations.length);
  }
}
