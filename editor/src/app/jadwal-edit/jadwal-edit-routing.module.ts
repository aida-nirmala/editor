import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadwalEditPage } from './jadwal-edit.page';

const routes: Routes = [
  {
    path: '',
    component: JadwalEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadwalEditPageRoutingModule {}
