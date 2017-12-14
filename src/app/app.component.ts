import { Component } from '@angular/core';
import { MessageDataService } from '../services/message-data.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMessage: Message = new Message();
  constructor(private messageDataService: MessageDataService) {
  }
addMessage() {
this.messageDataService.addMessage(this.newMessage);
this.newMessage = new Message();
console.log(this.messageDataService.messages[2]);

}




}
