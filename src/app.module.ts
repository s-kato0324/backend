import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { LogoutController } from './logout/logout.controller';
import { LogoutService } from './logout/logout.service';

@Module({
  imports: [
    // RedisModule.forRoot({
    //   type: 'single',
    //   url: 'redis://localhost:6379',
    // }),
  ],
  controllers: [
    AppController,
    LoginController,
    TodoController,
    LogoutController,
  ],
  providers: [AppService, LoginService, TodoService, LogoutService],
})
export class AppModule {}
