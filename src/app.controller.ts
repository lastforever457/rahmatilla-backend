import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  getRoot() {
    return 'Welcome to the NestJS API!';
  }
}
