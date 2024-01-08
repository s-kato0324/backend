import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { TodoService } from './todo.service';
import { Todo } from 'src/todo.interface';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // @Post('get-session')
  // getSession(@Body() userInfo: TodoUserInfo) {
  //   console.log('called get-session');
  //   const uuid = this.todoService.getSession(userInfo);
  //   console.log('uuid:', uuid);
  // }

  @Get()
  findAll(@Req() request: Request): Todo[] {
    console.log(request.cookies);
    return this.todoService.findAll();
  }

  @Get(':id')
  findAt(@Param('id') id: string): Todo {
    return this.todoService.findAt(id);
  }

  @Post()
  create(@Body() todo: Todo): void {
    this.todoService.create(todo);
  }

  @Put(':id')
  edit(@Param('id') id: string, @Body() todo: Todo): void {
    this.todoService.edit(id, todo);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.todoService.delete(id);
  }
}
