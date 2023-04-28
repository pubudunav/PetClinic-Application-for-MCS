import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeterinarianPage } from './veterinarian.page';

const routes: Routes = [
  {
    path: '',
    component: VeterinarianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinarianPageRoutingModule {}
