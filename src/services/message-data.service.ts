import { Injectable } from '@angular/core';
// import { Message } from '_debugger';
import { Message } from '../models/message';

@Injectable()
export class MessageDataService {

  lastId = 0;
  messages: Message[]= [];

  constructor() { }

  addMessage(message: Message): MessageDataService {
    if (!message.id) {
      message.id = ++this.lastId;
    }
    this.messages.push(message);
    return this;
  }
  getMessageById(id: number): Message {
    return this.messages.filter(message => message.id === id)
      .pop();
  }

  getAllMessages(): Message[] {
    return this.messages;
  }
  deleteMessageById(id: number): MessageDataService {
    this.messages = this.messages.filter(todo => todo.id !== id);
    return this;
  }

}

