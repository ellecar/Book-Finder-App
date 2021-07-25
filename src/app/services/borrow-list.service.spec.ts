import { TestBed } from '@angular/core/testing';

import { BorrowListService } from './borrow-list.service';

describe('BorrowListService', () => {
  let service: BorrowListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
