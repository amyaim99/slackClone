import { TestBed, inject } from '@angular/core/testing';
import { Message } from '../models/message';
import { MessageDataService } from './message-data.service';

describe('MessageDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageDataService]
    });
  });

  it('should be created', inject([MessageDataService], (service: MessageDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('add message ', () => {
it('should add message to MessageDataSevice', inject([MessageDataService], (service: MessageDataService) => {
  const message1 = new Message({ message: 'How was your day' });
  service.addMessage(message1);
  expect(service.getMessageById(1)).toEqual(message1);
}));
});

describe('delete message ', () => {
  it('should delete message from MessageDataSevice', inject([MessageDataService], (service: MessageDataService) => {
    const message1 = new Message({ message: 'Another busy day' });
    const message2 = new Message({ message: 'I am doing okay'});
    service.addMessage(message1);
    service.addMessage(message2);
    service.deleteMessageById(1);
    expect(service.messages.length === 1);
  }));
  });
  describe('get all messages message ', () => {
    it('should return all message in MessageDataSevice', inject([MessageDataService], (service: MessageDataService) => {
      const message1 = new Message({ message: 'Amazing  day', id: 1 });
      const message2 = new Message({ message: 'I am hmmm', id: 1 });
      service.addMessage(message1);
      service.addMessage(message2);
      expect(service.getAllMessages()).toEqual([message1, message2]);
    }));

});
});
