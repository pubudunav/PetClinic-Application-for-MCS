import { Injectable } from '@angular/core';
import { AppointmentVet } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class AppointmentclientService {
  bookingListRef: AngularFireList<any> ;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }


  
//create
createBooking(apt: AppointmentVet) {
    
  this.bookingListRef = this.db.list('/appointmentVet');
  console.log(this.bookingListRef);
   this.bookingListRef.push({
    gname: apt.gname,
    pname: apt.pname,
    nic: apt.nic,
    date: new Date().toISOString(),
    dis: apt.dis,
    

   
  })
  return this.bookingListRef
}

// Get Single
getBooking(id: string) {
  this.bookingRef = this.db.object('/appointmentVet/' + id);
  return this.bookingRef;
}

// Get List
getBookingList() {
  this.bookingListRef = this.db.list('/appointmentVet');
  return this.bookingListRef;
}

// Update


// Delete
deleteBooking(id: string) {
  this.bookingRef = this.db.object('/appointmentVet/' + id);
  this.bookingRef.remove();
}
}
