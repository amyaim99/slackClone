import { Injectable } from '@angular/core';
// import { Message } from '_debugger';
import { Message } from '../models/message';

@Injectable()
export class MessageDataService {

  lastId = 0;
  messages: Message[]= [];

  constructor() { }
  // Post
  addMessage(message: Message): MessageDataService {
    if (!message.id) {
      message.id = ++this.lastId;
    }
    this.messages.push(message);
    return this;
  }
  // Get
  getMessageById(id: number): Message {
    return this.messages.filter(message => message.id === id)
      .pop();
  }

  // Retrive
  getAllMessages(): Message[] {
    return this.messages;
  }

  // Delete
  deleteMessageById(id: number): MessageDataService {
    this.messages = this.messages.filter(todo => todo.id !== id);
    return this;
  }

}

