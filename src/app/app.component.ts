import { Component } from '@angular/core';
import { MessageDataService } from './services/message-data.service';
import { Message } from './models/message';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageDataService],
})
export class AppComponent {

constructor() { }

}
