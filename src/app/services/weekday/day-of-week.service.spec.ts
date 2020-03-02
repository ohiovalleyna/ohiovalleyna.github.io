import { TestBed } from '@angular/core/testing';

import { DayOfWeekService } from './day-of-week.service';

describe('WeekdayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DayOfWeekService = TestBed.get(DayOfWeekService);
    expect(service).toBeTruthy();
  });
});
