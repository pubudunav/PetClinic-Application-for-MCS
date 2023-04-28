import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardianPageRoutingModule } from './guardian-routing.module';

import { GuardianPage } from './guardian.page';
import { HeaderPageModule } from '../componentbundle/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardianPageRoutingModule,
    HeaderPageModule,
  ],
  declarations: [GuardianPage]
})
export class GuardianPageModule {}
