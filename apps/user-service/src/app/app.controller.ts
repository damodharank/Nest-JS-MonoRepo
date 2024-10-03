import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get-user' })
  getUserData(): any {
    this.logger.log('Received get-user message'); // Add this log
    return this.appService.getUser();
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
