import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'jfr-row',
  template: `
    <li>
      {{ operation.description  }}: {{ operation.amount  }}€ on {{ operation.date | date:'dd-MM-yyyy' }} <button (click)="onDeleteClick()" >Delete</button> 
    </li>
  `,
  styles: []
})
export class RowComponent implements OnInit {

  @Input() public operation: any;
  @Output() public delete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.delete.emit();
  }

}
