import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
  ],
  imports: [
    NgbModule.forRoot(), BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
