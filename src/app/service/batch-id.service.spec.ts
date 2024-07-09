import { TestBed } from '@angular/core/testing';

import { BatchIdService } from './batch-id.service';

describe('BatchIdService', () => {
  let service: BatchIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
