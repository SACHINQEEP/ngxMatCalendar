import { TestBed } from '@angular/core/testing';

import { NpxCalendarService } from './npx-calendar.service';

describe('NpxCalendarService', () => {
  let service: NpxCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpxCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
