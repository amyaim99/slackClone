import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Slack Clone';
  messages: string[] = ['How are you', 'I am tired', 'Alost there!'];
}
