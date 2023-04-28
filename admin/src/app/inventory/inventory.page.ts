import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder } from "@angular/forms";
import { VaccineService } from './../services/vaccine.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  bookingForm: FormGroup;
  constructor(private aptService: VaccineService,
    private router: Router,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      vname: [''],
      vcode: [''],
      mdate: [''],
      exdate: [''],
      pcode: [''],

      
    })
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
      
    } else {

      this.router.navigate(['/']);
      this.aptService.createBooking(this.bookingForm.value);
    }
  }

}
