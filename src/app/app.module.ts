import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessageDataService } from './services/message-data.service';
import { DisplayComponent } from './display/display.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    DisplayComponent,
  ],
  imports: [
    NgbModule.forRoot(), BrowserModule, FormsModule, CommonModule
  ],
  providers: [MessageDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
