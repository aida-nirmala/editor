import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadwalEditPageRoutingModule } from './jadwal-edit-routing.module';

import { JadwalEditPage } from './jadwal-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadwalEditPageRoutingModule
  ],
  declarations: [JadwalEditPage]
})
export class JadwalEditPageModule {}
