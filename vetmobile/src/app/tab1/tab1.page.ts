import { Component } from '@angular/core';

import { FormGroup, FormBuilder } from "@angular/forms";
import { VaccineCardService } from './../services/vaccine-card.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  registerForm: FormGroup;

  constructor(public fb: FormBuilder, private aptService: VaccineCardService,public toastCtrl: ToastController,
    private router: Router) {}


    ngOnInit() {
      console.log( this.registerForm,'formreg');
      this.registerForm = this.fb.group({
       
        vname: [''],
        vcode: [''],
        nxtDate: [''],
        vaccineId: [''],
        vetId: [''],
        pid: [''],
        
      })
    }
   async formSubmit() {console.log('fromsubmit');
    if (!this.registerForm.valid) {
     alert('Please fill all the fields correctly');
      return false;
     
    } else {
  console.log('inside formsubmit');
  
  const toast = await this.toastCtrl.create({  
    message: 'Pet details entered Successfully ',   
    duration: 4000  
  });  
  toast.present();  
      this.aptService.createBooking(this.registerForm.value);
    }
  }
}
