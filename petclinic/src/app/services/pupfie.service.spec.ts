import { TestBed } from '@angular/core/testing';

import { PupfieService } from './pupfie.service';

describe('PupfieService', () => {
  let service: PupfieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PupfieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
