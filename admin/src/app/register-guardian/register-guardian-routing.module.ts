import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterGuardianPage } from './register-guardian.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterGuardianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterGuardianPageRoutingModule {}
