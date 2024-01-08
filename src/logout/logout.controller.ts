import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { LogoutService } from './logout.service';

@Controller('logout')
export class LogoutController {
  constructor(private readonly logoutService: LogoutService) {}

  @Get()
  logout(@Req() request: Request) {
    this.logoutService.logout(request.cookies);
  }
}
