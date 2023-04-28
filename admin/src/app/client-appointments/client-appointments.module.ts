import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientAppointmentsPageRoutingModule } from './client-appointments-routing.module';

import { ClientAppointmentsPage } from './client-appointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientAppointmentsPageRoutingModule
  ],
  declarations: [ClientAppointmentsPage]
})
export class ClientAppointmentsPageModule {}
