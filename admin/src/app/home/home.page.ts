import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text ="what tefuck"
  constructor(
    private router: Router,
  ) {}


  petnav(){
    console.log('click button pet');
    this.router.navigate(['pet']);
  }
  vetnav(){
    this.router.navigate(['veterinarian']);
  }
  inventorynav(){
    this.router.navigate(['inventory']);
  }
  appointmentnav(){
    this.router.navigate(['appointment']);
  }
  appointmentbooknav(){
    this.router.navigate(['make-appointment']);
  }
  
  reportsView(){
    this.router.navigate(['report']);
  }
  event(){
    this.router.navigate(['event']);
  }
  clientappointments(){
    this.router.navigate(['client-appointments']);
  }
  guardnav(){
    this.router.navigate(['guardian']);
  }
  vcard(){
    this.router.navigate(['vaccine-card']);
  }
}
