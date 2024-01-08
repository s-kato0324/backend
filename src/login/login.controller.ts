import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { Login } from './login.interface';
import { Response } from 'express';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  login(@Res({ passthrough: true }) response: Response, @Body() login: Login) {
    const uuid = this.loginService.login(login);
    if (!uuid) {
      console.log('401');
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'incorrect username or password',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    response.cookie('session_id', uuid, {
      maxAge: 10000,
      httpOnly: false,
      secure: false,
    });
  }
}
