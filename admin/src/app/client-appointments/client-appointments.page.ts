import { Component, OnInit } from '@angular/core';
import { AppointmentVet } from '../shared/Appointment';
import { AppointmentclientService } from './../services/appointmentclient.service';
import { ModalController } from '@ionic/angular';
import {AppointmentViewModalComponent} from '../shared/appointment-view-modal/appointment-view-modal.component';
@Component({
  selector: 'app-client-appointments',
  templateUrl: './client-appointments.page.html',
  styleUrls: ['./client-appointments.page.scss'],
})
export class ClientAppointmentsPage implements OnInit {
  Bookings = [];
  constructor(  private aptService: AppointmentclientService,
    private modalController:ModalController) { }


  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
     //   let a = item.payload.toJSON();
        let a = JSON.parse(JSON.stringify(item.payload));
        a['$key'] = item.key;
        this.Bookings.push(a as AppointmentVet);
      })
    })
  }

  async presentModal(booking:any) {
   console.log(booking);
    const modal = await this.modalController.create({
      component: AppointmentViewModalComponent,
      componentProps: {'booking':booking}
    });
    return await modal.present();
  }
  openAppointementDetailPopUp(booking:any){
    console.log(booking);
  }
  fetchBookings() {
    this.aptService.getBookingList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteBooking(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteBooking(id)
    }
  }
}
