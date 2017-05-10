import { User } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  
  private users: User[];

  constructor() {
    this.users = [];
  }

  private cloneUser(originalUser: User): User{
    return Object.assign({}, originalUser);
  }

  getUsers() : User[]{
    return this.users;
  }

  newUser() : User{
    return new User("", new Date());
  }

  saveUser(originalUser: User): User{
    const targetUser = this.cloneUser(originalUser);
    this.users.push(targetUser);
    return targetUser;
  }
}
