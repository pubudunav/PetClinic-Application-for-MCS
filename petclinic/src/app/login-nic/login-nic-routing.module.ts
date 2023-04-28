import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginNicPage } from './login-nic.page';

const routes: Routes = [
  {
    path: '',
    component: LoginNicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginNicPageRoutingModule {}
