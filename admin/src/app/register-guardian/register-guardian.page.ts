import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { GuardianService } from './../services/guardian.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'; 
@Component({
  selector: 'app-register-guardian',
  templateUrl: './register-guardian.page.html',
  styleUrls: ['./register-guardian.page.scss'],
})
export class RegisterGuardianPage implements OnInit {

  registerForm: FormGroup;

  constructor(public fb: FormBuilder, private aptService: GuardianService,
    private router: Router,  private formBuilder: FormBuilder,public toastCtrl: ToastController) {
      this.registerForm = this.formBuilder.group(
        {
          name: ['', Validators.required],
          nic: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          mobile: ['', Validators.required]
        }
      );
     }

  ngOnInit() {
    console.log( this.registerForm,'formreg');
    this.registerForm = this.fb.group({
      name: [''],
      nic: [''],
      password: [''],
      mobile: [''],
      email: [''],
      addrress: [''],
   
      
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
  message: 'guardian details entered Successfully ',   
  duration: 4000  
});  
toast.present(); 

    this.aptService.createBooking(this.registerForm.value);
  }
}


}

