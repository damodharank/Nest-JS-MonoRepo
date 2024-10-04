import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
   registerUser(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): string {
    console.log('User Registration Data (from AuthService):', userData);
    return `User ${userData.firstName} ${userData.lastName} has been registered via the service!`;
  }
}
