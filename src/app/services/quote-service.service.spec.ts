import { TestBed, inject } from '@angular/core/testing';

import { QuoteServiceService } from './quote-service.service';
import { HttpModule } from '@angular/http';

describe('QuoteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [QuoteServiceService]
    });
  });

  it('should be created', inject([QuoteServiceService], (service: QuoteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
