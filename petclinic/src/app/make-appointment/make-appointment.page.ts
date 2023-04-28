import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from "@angular/forms";
import { AppointmentService } from './../services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.page.html',
  styleUrls: ['./make-appointment.page.scss'],
})
export class MakeAppointmentPage implements OnInit {

  bookingForm: FormGroup;

  constructor(
    private aptService: AppointmentService,
    private router: Router,
    public fb: FormBuilder
  ) { }

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
