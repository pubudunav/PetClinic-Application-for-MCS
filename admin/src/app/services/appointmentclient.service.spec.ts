import { TestBed } from '@angular/core/testing';

import { AppointmentclientService } from './appointmentclient.service';

describe('AppointmentclientService', () => {
  let service: AppointmentclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
