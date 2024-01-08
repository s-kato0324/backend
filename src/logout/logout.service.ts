import { Injectable } from '@nestjs/common';

@Injectable()
export class LogoutService {
  // redis = new Redis();
  logout(cookies) {
    const key = cookies['session_id'];
    console.log(key);
    // this.redis.del(key);
  }
}
