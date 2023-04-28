import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginNicPageRoutingModule } from './login-nic-routing.module';

import { LoginNicPage } from './login-nic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginNicPageRoutingModule
  ],
  declarations: [LoginNicPage]
})
export class LoginNicPageModule {}
