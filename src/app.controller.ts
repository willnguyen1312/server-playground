import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request): string {
    console.log(req.url);
    console.log(req.url.length);
    return this.appService.getHello();
  }
}
