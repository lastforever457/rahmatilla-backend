import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('/')
  getRoot() {
    return 'Welcome to the NestJS API!';
  }
}
