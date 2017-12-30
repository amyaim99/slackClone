import { TestBed, inject } from '@angular/core/testing';

import { JokeService } from './joke.service';
import { HttpModule } from '@angular/http';

describe('JokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [JokeService]
    });
  });

  it('should be created', inject([JokeService], (service: JokeService) => {
    expect(service).toBeTruthy();
  }));
});
