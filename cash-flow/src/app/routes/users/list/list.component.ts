import { User } from './../data/user.model';
import { UsersService } from './../data/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jfr-list',
  template: `
    <div *ngIf="users.length == 0"> No hay usuarios</div>
    <div *ngIf="users.length > 0" [ngClass]="{pocas:users.length<=3,muchas:users.length>3}"> 
      Usuarios
    </div>

        {{users | json}}
    <ul class="container">
      <jfr-row *ngFor="let user of users" [user]="user" (delete)="onDelete(user)">
      </jfr-row>
    </ul>
  `,
  styles: [`
    .pocas {
      color: green;
    }
    .muchas {
      color: red;
    }
  `]
})
export class ListComponent implements OnInit {
  public users : User[];
  constructor(public usersService : UsersService) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.users = this.usersService.getUsers();
  }

  onDelete(user) {
    this.usersService.deleteUser(user);
    this.getUserList();
  }

}
