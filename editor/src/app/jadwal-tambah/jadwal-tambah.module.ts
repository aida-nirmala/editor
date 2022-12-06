import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadwalTambahPageRoutingModule } from './jadwal-tambah-routing.module';

import { JadwalTambahPage } from './jadwal-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadwalTambahPageRoutingModule
  ],
  declarations: [JadwalTambahPage]
})
export class JadwalTambahPageModule {}
