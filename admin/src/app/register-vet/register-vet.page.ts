import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { VetService } from './../services/vet.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'; 
@Component({
  selector: 'app-register-vet',
  templateUrl: './register-vet.page.html',
  styleUrls: ['./register-vet.page.scss'],
})
export class RegisterVetPage implements OnInit {
  registerForm: FormGroup;
  constructor(public fb: FormBuilder, private aptService: VetService,public toastCtrl: ToastController,
    private router: Router,) { }

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
this.router.navigate(['/']);
const toast = await this.toastCtrl.create({  
  message: 'vet details entered Successfully ',   
  duration: 4000  
});  
toast.present();
    this.aptService.createBooking(this.registerForm.value);
    
  }
}


}