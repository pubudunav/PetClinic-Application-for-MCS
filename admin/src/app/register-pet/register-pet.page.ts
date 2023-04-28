import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from "@angular/forms";
import { RegisterpetService } from './../services/registerpet.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'; 
@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.page.html',
  styleUrls: ['./register-pet.page.scss'],
})
export class RegisterPetPage implements OnInit {
  registerForm: FormGroup;
  constructor( public fb: FormBuilder,
    private aptService: RegisterpetService,
    private router: Router,public toastCtrl: ToastController) { }

 
  ngOnInit() {
    console.log( this.registerForm,'formreg');
    this.registerForm = this.fb.group({
      pname: [''],
      nic: [''],
      Gender: [''],
      ptype: [''],
      color: [''],
      pId: ['']
    })
  }

  
  async formSubmit() {console.log('fromsubmit');
    if (!this.registerForm.valid) {
      alert('Please fill all the fields correctly');
      return false;
      
    } else {
console.log('inside formsubmit');
this.router.navigate(['/']);
const toast = await this.toastCtrl.create({  
  message: 'Pet details entered Successfully ',   
  duration: 4000  
});  
toast.present();  
  

      this.aptService.createBooking(this.registerForm.value);
      
    }
  }

}
