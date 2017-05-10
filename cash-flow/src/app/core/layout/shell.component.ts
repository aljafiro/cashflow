import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jfr-shell',
  template: `
    <jfr-top-bar></jfr-top-bar>
    <jfr-main-content></jfr-main-content>
  `,
  styles: []
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
