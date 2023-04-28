import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterGuardianPageRoutingModule } from './register-guardian-routing.module';

import { RegisterGuardianPage } from './register-guardian.page';
import { HeaderPageModule } from '../componentbundle/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterGuardianPageRoutingModule,
    HeaderPageModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterGuardianPage]
})
export class RegisterGuardianPageModule {}
