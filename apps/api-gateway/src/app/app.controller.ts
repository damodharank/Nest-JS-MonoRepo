import { Controller, Get, Inject  } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';



@Controller()
export class AppController {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
    @Inject('NOTIFICATION_SERVICE') private readonly notificationServiceClient: ClientProxy
  ) {}

  @Get()
  getHello() {
    return { message: 'Hello API Gateway' };
  }

  @Get('user')
  getUserData() {
    // console.log('get user data================');
    return this.userServiceClient.send({ cmd: 'get-user' }, {});
  }

  @Get('notify')
  getNotificationData() {
    return this.notificationServiceClient.send({ cmd: 'send-notification' }, {});
  }
}

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getData() {
//     return this.appService.getData();
//   }
// }
