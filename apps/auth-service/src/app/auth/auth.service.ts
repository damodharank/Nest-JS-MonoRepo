import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.model';

@Injectable()
export class AuthService {
  private users: User[] = [];

  getData(): string {
    return 'Welcome to auth-service!';
  }

  getUsers(): User[] {
    const users: User[] = [
      {
        id: '1',
        username: 'admin',
        email: 'dada@ddad.com ',
        createdAt: new Date(),
      },
      {
        id: '2',
        username: 'user',
        email: 'aaaaa@sfsf.com',
        createdAt: new Date(),
      }

    ];
    return users;
  }

  register(createUserInput: CreateUserInput): User {
    const user: User = {
      id: Date.now().toString(), ...createUserInput,
      createdAt: new Date(),
    };
    this.users.push(user);
    return user;
  }
}
