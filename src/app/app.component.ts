import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Slack clone';
  messages: string[] = ['How are you', 'I am tired', 'Alost there!'];
}
