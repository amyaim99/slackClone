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

  describe('addMessage()', () => {
it('should add message to MessageDataSevice', inject([MessageDataService], (service: MessageDataService) => {
  const message1 = new Message({message: 'Wake up'});
  service.addMessage(message1);
  expect(service.getMessageById(1)).toEqual('Wake up');
}));
});
});
