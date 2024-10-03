import { Controller,  Logger  } from '@nestjs/common';

import { MessagePattern } from '@nestjs/microservices';


@Controller()
export class AppController{
  private readonly logger = new Logger(AppController.name);

  @MessagePattern({ cmd: 'send-notification' })
  sendNotification() {
    this.logger.log('Notification sent');
    return { message: 'Notification sent' };
  }
}












// import { Controller, Get } from '@nestjs/common';

// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getData() {
//     return this.appService.getData();
//   }
// }
