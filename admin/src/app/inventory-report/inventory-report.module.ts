import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryReportPageRoutingModule } from './inventory-report-routing.module';

import { InventoryReportPage } from './inventory-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryReportPageRoutingModule
  ],
  declarations: [InventoryReportPage]
})
export class InventoryReportPageModule {}
