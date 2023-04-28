import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinarianPageRoutingModule } from './veterinarian-routing.module';

import { VeterinarianPage } from './veterinarian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinarianPageRoutingModule
  ],
  declarations: [VeterinarianPage]
})
export class VeterinarianPageModule {}
