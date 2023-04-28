import { Component } from '@angular/core';

import { AppointmentService } from './../services/appointment.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  bookingForm: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder, private aptService: AppointmentService
  ) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      pname: [''],
      gname: [''],
      nic: [''],
      date: [''],
      dis: ['']
      
    })
  }


  
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
      
    } else {
     this.aptService.createBooking(this.bookingForm.value);
      this.bookingForm.reset();
    }
  }

}
