import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  private users: User[];
  private usersCount$: BehaviorSubject<number>;

  constructor() {
    this.users = [];
    this.usersCount$ = new BehaviorSubject(0);
    this.emitUserCount();
  }

  private cloneUser(originalUser: User): User{
    return Object.assign({}, originalUser);
  }

  getUsers() : User[] {
    return this.users;
  }

  newUser() : User {
    return new User(new Date(), 0, "", 1, "");
  }

  saveUser(originalUser: User) : User {
    const targetUser = this.cloneUser(originalUser);
    targetUser._id = new Date().getTime().toString();
    this.users.push(targetUser);
    this.emitUserCount();
    return targetUser;
  }

  deleteUser(user: User) {
    let index: number = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.emitUserCount();
    }
  }

  getUsersCount$(): Observable<number> {
    return this.usersCount$.asObservable();
  }

  private emitUserCount() {
    this.usersCount$.next(this.users.length);
  }
}
