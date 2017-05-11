import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'jfr-row',
  template: `
    <li>
      {{ user.description  }}: {{ user.name  }} on {{ user.date | date:'dd-MM-yyyy' }} <button (click)="onDeleteClick()" >Delete</button> 
    </li>
  `,
  styles: []
})
export class RowComponent implements OnInit {

  @Input() public user: any;
  @Output() public delete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.delete.emit();
  }

}
