import { Injectable } from '@angular/core';

import { Vaccine } from '../shared/model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

   
  //create
createBooking(apt: Vaccine) {
     
  this.bookingListRef = this.db.list('/vaccine');
  console.log(this.bookingListRef);
  return this.bookingListRef.push({
    vname: apt.vname,
    vcode:apt.vcode,
    mdate: apt.mdate,
    exdate:apt.exdate,
    pcode:apt.pcode,
    


  })
}

// Get Single
getBooking(id: string) {
  this.bookingRef = this.db.object('/vaccine/' + id);
  return this.bookingRef;
}

// Get List
getBookingList() {
  this.bookingListRef = this.db.list('/vaccine');
  return this.bookingListRef;
}

// Update
updateBooking(id, apt: Vaccine) {
  return this.bookingRef.update({
    vname: apt.vname,
    vcode:apt.vcode,
    mdate: apt.mdate,
    exdate:apt.exdate,
    pcode:apt.pcode,
  })
}

// Delete
deleteBooking(id: string) {
  this.bookingRef = this.db.object('/veccine/' + id);
  this.bookingRef.remove();
}

}
