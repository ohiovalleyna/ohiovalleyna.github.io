import { TestBed } from '@angular/core/testing';

import { OvanaMeetingRetrieverService } from './ovana-meeting-retriever.service';

describe('OvanaMeetingRetrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OvanaMeetingRetrieverService = TestBed.get(OvanaMeetingRetrieverService);
    expect(service).toBeTruthy();
  });
});
