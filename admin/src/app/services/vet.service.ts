import { Injectable } from '@angular/core';

import { Vet } from '../shared/model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class VetService {

  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  
  //create
createBooking(apt: Vet) {
     
  this.bookingListRef = this.db.list('/vet');
  console.log(this.bookingListRef);
  return this.bookingListRef.push({
    name: apt.name,
    nic:apt.nic,
    password: apt.password,
    mobile:apt.mobile,
    email:apt.email,
    addrress:apt.addrress

  })
}

// Get Single
getBooking(id: string) {
  this.bookingRef = this.db.object('/vet/' + id);
  return this.bookingRef;
}

// Get List
getBookingList() {
  this.bookingListRef = this.db.list('/vet');
  return this.bookingListRef;
}

// Update
updateBooking(id, apt: Vet) {
  return this.bookingRef.update({
    name: apt.name,
    nic:apt.nic,
    password: apt.password,
    mobile:apt.mobile,
    email:apt.email,
    addrress:apt.addrress
  })
}

// Delete
deleteBooking(id: string) {
  this.bookingRef = this.db.object('/vet/' + id);
  this.bookingRef.remove();
}
}