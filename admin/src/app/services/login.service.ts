

import { Injectable } from '@angular/core';
import { User } from '../shared/model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 userListRef: AngularFireList<any> ;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    
   }

//create
  createUser(apt: User) {
    
    this.userListRef = this.db.list('/user');
    console.log(this.userListRef);
     this.userListRef.push({
      username: apt.username,
      password: apt.password,
      usertype: 'admin',
   
     
    })
    return this.userListRef
  }

  // Get Single
  getBooking(id: string) {
    this.userRef = this.db.object('/user/' + id);
    return this.userRef;
  }

  // Get List
  getBookingList() {
    this.userListRef = this.db.list('/user');

    if(this.userListRef != undefined)
    {
      console.log(this.userListRef);
    }
    return this.userListRef;
  }

  // // Update
  // updateBooking(id, apt: Appointment) {
  //   return this.userRef.update({
  //     name: apt.name,
  //     pid: apt.pid,
  //     nic: apt.nic,
  //     vid: apt.vid,
  //     date: apt.date,
  //     dis: apt.dis,
  //   })
  // }

//   // Delete
//   deleteBooking(id: string) {
//     this.bookingRef = this.db.object('/appointment/' + id);
//     this.bookingRef.remove();
//   }
}
