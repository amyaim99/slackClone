import { TestBed, inject } from '@angular/core/testing';

import { TechNewsService } from './tech-news.service';
import { HttpModule, Http } from '@angular/http';

describe('TechNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [TechNewsService]
    });
  });

  it('should be created', inject([TechNewsService], (service: TechNewsService) => {
    expect(service).toBeTruthy();
  }));
});
