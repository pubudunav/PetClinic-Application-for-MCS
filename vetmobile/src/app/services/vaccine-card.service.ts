import { Injectable } from '@angular/core';
import { VaccineCard } from '../shared/vaccineCard';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class VaccineCardService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }
  
  //create
createBooking(apt: any) {
     
  this.bookingListRef = this.db.list('/vaccineCard');
  console.log(this.bookingListRef);
  return this.bookingListRef.push({
    date: new Date().toISOString(),
    vname:apt.vname,
    vcode: apt.vcode,
    nxtDate:apt.nxtDate,
    vaccineId:apt.vaccineId,
    vetId:apt.vetId,
    pid:apt.pid


  })
}

// Get Single
getBooking(id: string) {
  this.bookingRef = this.db.object('/vaccineCard/' + id);
  return this.bookingRef;
}

// Get List
getBookingList() {
  this.bookingListRef = this.db.list('/vaccineCard');
  return this.bookingListRef;
}

// Update
updateBooking(id, apt: VaccineCard) {
  return this.bookingRef.update({
    date: new Date().toISOString(),
    vname:apt.vname,
    vcode: apt.vcode,
    nxtDate:apt.nxtDate,
    vaccineId:apt.vaccineId,
    vetId:apt.vetId,
    pid:apt.pid
  })
}

// Delete
deleteBooking(id: string) {
  this.bookingRef = this.db.object('/vaccineCard/' + id);
  this.bookingRef.remove();
}
}
