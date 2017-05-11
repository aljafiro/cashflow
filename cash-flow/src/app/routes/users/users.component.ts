import { UsersService } from './../users/data/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jfr-users',
  template: `
    <p>
      users Works!
    </p>
    <nav>
      <a routerLink="/users/new">->New</a>
      <a routerLink="/users/list">   ->List</a>
      <span class="float-right">Num Users: <strong>{{ usersCount }}</strong></span>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  public usersCount = 0;
  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.subscribeToUsersCount();
  }

  subscribeToUsersCount() {
    this.usersService.getUsersCount$()
      .subscribe(data => this.usersCount = data)
  }

}
