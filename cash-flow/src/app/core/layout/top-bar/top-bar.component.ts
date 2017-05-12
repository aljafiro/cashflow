import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jfr-top-bar',
  template: `
    <nav>
      <a routerLink="/">->Home</a>
      <a routerLink="/operations">->Operations</a>
      <a routerLink="/users">   ->Users</a>
      <a routerLink="/login">   ->Login</a>
      <a routerLink="/about">   ->About</a>
    </nav>
  `,
  styles: [`
  
    a{
      color: red;
    }

    a:visited{
      color: red;
    }
  `]
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
