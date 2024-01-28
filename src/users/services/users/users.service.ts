import { Injectable } from '@nestjs/common';
import { CreateUserDataType } from 'types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'dhiran', email: 'dhiran@gmail.com' },
    { username: 'anson', email: 'anson@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createNewUser(userDetails: CreateUserDataType) {
    return this.fakeUsers.push(userDetails);
  }

  fetchUserById(id: number) {
    return { id, username: 'dhiran', email: 'dhiran@gmail.com' };
    // return null;
  }
}
