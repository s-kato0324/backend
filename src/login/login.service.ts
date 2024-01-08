import { Injectable } from '@nestjs/common';
import { Login } from './login.interface';
import * as crypto from 'crypto';

@Injectable()
export class LoginService {
  // bcrypt = require('bcrypt');
  // redis = new Redis();

  login(login: Login) {
    if (login.username !== 'test' || login.password !== 'test') {
      return '';
    }
    const uuid = crypto.randomUUID();
    return uuid;
  }
}
