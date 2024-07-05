import { TestBed } from '@angular/core/testing';

import { ShareTableDataService } from './share-table-data.service';

describe('ShareTableDataService', () => {
  let service: ShareTableDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareTableDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
