import { OperationsService } from './data/operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jfr-operations',
  template: `
    <p>
      operations Works!
    </p>
    <nav>
      <a routerLink="/operations/new">->New</a>
      <a routerLink="/operations/list">   ->List</a>
      <span class="float-right">Num Ops: <strong>{{ operationsCount }}</strong></span>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class OperationsComponent implements OnInit {

  public operationsCount = 0;
  constructor(public operationsService: OperationsService) { }

  ngOnInit() {
    this.subscribeToOperationsCount();
  }

  subscribeToOperationsCount() {
    this.operationsService
      .getOperationsCount$()
      .subscribe(data => this.operationsCount = data)
  }

}
