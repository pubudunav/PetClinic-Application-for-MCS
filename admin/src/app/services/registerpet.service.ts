import { Injectable } from '@angular/core';
import { Pet } from '../shared/model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class RegisterpetService {

  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  
//create
createBooking(apt: Pet) {
     
  this.bookingListRef = this.db.list('/pet');
  console.log(this.bookingListRef);
  return this.bookingListRef.push({
    pname: apt.pname,
    nic:apt.nic,
    Gender: apt.Gender,
    ptype:apt.ptype,
    color:apt.color,
    pId:apt.pId

  })
}

// Get Single
getBooking(id: string) {
  this.bookingRef = this.db.object('/pet/' + id);
  return this.bookingRef;
}

// Get List
getBookingList() {
  this.bookingListRef = this.db.list('/pet');
  return this.bookingListRef;
}

// Update
updateBooking(id, apt: Pet) {
  return this.bookingRef.update({
    pname: apt.pname,
    nic:apt.nic,
    Gender: apt.Gender,
    ptype:apt.ptype,
    color:apt.color,
    pId:apt.pId
  })
}

// Delete
deleteBooking(id: string) {
  this.bookingRef = this.db.object('/pet/' + id);
  this.bookingRef.remove();
}
}
