import { Controller, Get } from '@nestjs/common';

import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AuthService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
