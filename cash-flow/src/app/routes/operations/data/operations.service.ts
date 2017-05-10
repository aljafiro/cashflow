import { Operation } from './operation.model';
import { Injectable } from '@angular/core';

@Injectable()
export class OperationsService {

  private operations: Operation[];

  constructor() {
    this.operations = [];
  }

  private cloneOperation(originalOperation: Operation): Operation{
    return Object.assign({}, originalOperation);
  }

  getOperations() : Operation[] {
    return this.operations;
  }

  newOperation() : Operation {
    return new Operation("", new Date(), 0);
  }

  saveOperation(originalOperation: Operation) : Operation {
    const targetOperation = this.cloneOperation(originalOperation);
    targetOperation._id = new Date().getTime().toString();
    this.operations.push(targetOperation);
    return targetOperation;
  }

  deleteOperation(operation: Operation) {
    let index: number = this.operations.indexOf(operation);
    if (index !== -1) {
      this.operations.splice(index, 1);
    }
  }
}
