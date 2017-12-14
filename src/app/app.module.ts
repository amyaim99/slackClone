import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessageDataService } from '../services/message-data.service';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
  ],
  imports: [
    NgbModule.forRoot(), BrowserModule, FormsModule
  ],
  providers: [MessageDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
