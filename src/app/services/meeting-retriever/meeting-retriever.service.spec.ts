import { TestBed } from '@angular/core/testing';

import { MeetingRetrieverService } from './meeting-retriever.service';

describe('MeetingRetrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeetingRetrieverService = TestBed.get(MeetingRetrieverService);
    expect(service).toBeTruthy();
  });
});
