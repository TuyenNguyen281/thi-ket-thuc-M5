import { TestBed } from '@angular/core/testing';

import { IBookService } from './ibook.service';

describe('IBookService', () => {
  let service: IBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
