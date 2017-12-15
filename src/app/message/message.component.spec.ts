import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message.component';
import { MessageDataService } from '../services/message-data.service';
import { Message } from '../models/message';



describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      providers: [MessageDataService],
      declarations: [ MessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add message to MessageDataSevice', () => {
    const message1 = new Message({ message: 'How was your day' });
    this.addMessage(message1);
    expect(this.getMessageById(0)).toEqual(message1);
  });
});
