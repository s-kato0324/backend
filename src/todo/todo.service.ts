import { Injectable } from '@nestjs/common';
import { Todo } from 'src/todo.interface';

@Injectable()
export class TodoService {
  // crypto = require('crypto');

  // redis = new Redis();

  // // セッション情報取得、更新
  // getSession(userInfo: TodoUserInfo) {
  //   const now = new Date();
  //   const later30m = now.getTime() + 1800 * 1000;

  //   const newSessionInfo: SessionInfo = {
  //     username: userInfo.username,
  //     expires: later30m.toString(),
  //   };

  //   console.log('newSessionInfo', newSessionInfo);

  //   const uuid = crypto.randomUUID();
  //   const salt = '123456789';
  //   const key = this.crypto.scryptSync('password', salt, 32);
  //   const iv = this.crypto.randomBytes(16);

  //   const cipher = this.crypto.createCipher('aes-256-cbc', key, iv);

  //   let cipheredData = cipher.update(String(newSessionInfo), 'utf-8', 'hex');
  //   cipheredData += cipher.final('hex');

  //   console.log('cipher', cipheredData);

  //   if (userInfo.sessionId) {
  //     // 復号
  //     const decipher = this.crypto.createDecipheriv('aes-256-cbc', key, iv);
  //     const currentSessionInfo = this.redis.get(userInfo.sessionId);
  //     let decipherData = decipher.update(currentSessionInfo, 'hex', 'utf-8');
  //     decipherData += cipher.final('hex');
  //     decipherData = JSON.parse(decipherData);
  //     console.log(decipherData);

  //     // 有効期限が切れていた場合エラー
  //     if (false) {
  //       //: TODO
  //     }

  //     this.redis.getset(userInfo.sessionId, cipheredData);
  //     return userInfo.sessionId;
  //   }

  //   this.redis.set(uuid, cipheredData);
  //   return uuid;
  // }

  // 一つ取得
  findAt(id: string): Todo {
    return this.todoList.find((item) => item.id === id);
  }

  // 全部取得
  findAll(): Todo[] {
    return this.todoList;
  }

  // 追加
  create(addTodo: Todo): void {
    this.todoList.push(addTodo);
  }

  // 編集
  edit(id: string, todoDto: Todo): void {
    const targetId = this.todoList.findIndex((item) => item.id === id);
    const editContent = this.todoList[targetId];
    if (todoDto.title !== null) {
      editContent.title = todoDto.title;
    }
    if (todoDto.author !== null) {
      editContent.author = todoDto.author;
    }
    if (todoDto.content !== null) {
      editContent.content = todoDto.content;
    }
    if (todoDto.status !== null) {
      editContent.status = todoDto.status;
    }
    this.todoList[targetId] = editContent;
  }

  // 削除
  delete(id: string) {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }
  private todoList: Todo[] = [
    {
      id: '1',
      title: 'title1',
      author: 'test1',
      content: 'content1',
      status: 0,
    },
    {
      id: '2',
      title: 'title2',
      author: 'test2',
      content: 'content2',
      status: 1,
    },
    {
      id: '3',
      title: 'title3',
      author: 'test3',
      content: 'content3',
      status: 2,
    },
    {
      id: '4',
      title: 'title4',
      author: 'test4',
      content: 'content4',
      status: 3,
    },
    {
      id: '5',
      title: 'title5',
      author: 'test5',
      content: 'content5',
      status: 4,
    },
    {
      id: '6',
      title: 'title6',
      author: 'test6',
      content: 'content6',
      status: 2,
    },
    {
      id: '7',
      title: 'title7',
      author: 'test7',
      content: 'content7',
      status: 3,
    },
    {
      id: '8',
      title: 'title8',
      author: 'test8',
      content: 'content8',
      status: 0,
    },
    {
      id: '9',
      title: 'title9',
      author: 'test9',
      content: 'content9',
      status: 1,
    },
    {
      id: '10',
      title: 'title10',
      author: 'test10',
      content: 'content10',
      status: 2,
    },
    {
      id: '11',
      title: 'title11',
      author: 'test11',
      content: 'content11',
      status: 0,
    },
    {
      id: '12',
      title: 'title12',
      author: 'test12',
      content: 'content12',
      status: 1,
    },
    {
      id: '13',
      title: 'title13',
      author: 'test13',
      content: 'content13',
      status: 2,
    },
    {
      id: '14',
      title: 'title14',
      author: 'test14',
      content: 'content14',
      status: 3,
    },
    {
      id: '15',
      title: 'title15',
      author: 'test15',
      content: 'content15',
      status: 4,
    },
    {
      id: '16',
      title: 'title16',
      author: 'test16',
      content: 'content16',
      status: 2,
    },
    {
      id: '17',
      title: 'title17',
      author: 'test17',
      content: 'content17',
      status: 3,
    },
    {
      id: '18',
      title: 'title18',
      author: 'test18',
      content: 'content18',
      status: 0,
    },
    {
      id: '19',
      title: 'title19',
      author: 'test19',
      content: 'content19',
      status: 1,
    },
    {
      id: '20',
      title: 'title20',
      author: 'test20',
      content: 'content20',
      status: 2,
    },
    {
      id: '21',
      title: 'title21',
      author: 'test21',
      content: 'content21',
      status: 0,
    },
    {
      id: '22',
      title: 'title22',
      author: 'test22',
      content: 'content22',
      status: 1,
    },
    {
      id: '23',
      title: 'title23',
      author: 'test23',
      content: 'content23',
      status: 2,
    },
    {
      id: '24',
      title: 'title24',
      author: 'test24',
      content: 'content24',
      status: 3,
    },
    {
      id: '15',
      title: 'title15',
      author: 'test15',
      content: 'content15',
      status: 4,
    },
    {
      id: '26',
      title: 'title26',
      author: 'test26',
      content: 'content26',
      status: 2,
    },
    {
      id: '27',
      title: 'title27',
      author: 'test27',
      content: 'content27',
      status: 3,
    },
    {
      id: '28',
      title: 'title28',
      author: 'test28',
      content: 'content28',
      status: 0,
    },
    {
      id: '29',
      title: 'title29',
      author: 'test29',
      content: 'content29',
      status: 1,
    },
    {
      id: '30',
      title: 'title30',
      author: 'test30',
      content: 'content30',
      status: 2,
    },
    {
      id: '31',
      title: 'title31',
      author: 'test31',
      content: 'content31',
      status: 2,
    },
    {
      id: '32',
      title: 'title32',
      author: 'test32',
      content: 'content32',
      status: 2,
    },
  ];
}
