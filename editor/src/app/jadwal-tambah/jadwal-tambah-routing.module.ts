import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadwalTambahPage } from './jadwal-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: JadwalTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadwalTambahPageRoutingModule {}
