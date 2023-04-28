import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  bookingListRef: AngularFireList<any> ;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    
   }

//create
  createBooking(apt: Appointment) {
    
    this.bookingListRef = this.db.list('/appointment');
    console.log(this.bookingListRef);
     this.bookingListRef.push({
      name: apt.name,
      pid: apt.pid,
      nic: apt.nic,
      vid: apt.vid,
      date: new Date().toISOString(),
      dis: apt.dis,
      
    })
    return this.bookingListRef
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/appointment');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Appointment) {
    return this.bookingRef.update({
      name: apt.name,
      pid: apt.pid,
      nic: apt.nic,
      vid: apt.vid,
      date: apt.date,
      dis: apt.dis,
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    this.bookingRef.remove();
  }
}
