import { TestBed } from '@angular/core/testing';

import { BmltMeetingRetrieverService } from './bmlt-meeting-retriever.service';

describe('BmltMeetingRetrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BmltMeetingRetrieverService = TestBed.get(BmltMeetingRetrieverService);
    expect(service).toBeTruthy();
  });
});
