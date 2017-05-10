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
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class OperationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
