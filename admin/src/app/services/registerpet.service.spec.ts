import { TestBed } from '@angular/core/testing';

import { RegisterpetService } from './registerpet.service';

describe('RegisterpetService', () => {
  let service: RegisterpetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterpetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
