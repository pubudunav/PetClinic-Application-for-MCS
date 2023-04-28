import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientAppointmentsPage } from './client-appointments.page';

const routes: Routes = [
  {
    path: '',
    component: ClientAppointmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientAppointmentsPageRoutingModule {}
