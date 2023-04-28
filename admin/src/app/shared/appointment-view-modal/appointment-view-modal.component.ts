import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-appointment-view-modal',
  templateUrl: './appointment-view-modal.component.html',
  styleUrls: ['./appointment-view-modal.component.scss'],
})
export class AppointmentViewModalComponent implements OnInit {

  @Input() booking: any;

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
 

}




