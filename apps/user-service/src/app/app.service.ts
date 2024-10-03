import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUser(): any {
    return { userId: 1, name: 'John Doe', role: 'Admin' };
  }
}



// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getData(): { message: string } {
//     return { message: 'Hello API' };
//   }
// }
