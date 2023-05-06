import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahpelangganPage } from './tambahpelanggan.page';

const routes: Routes = [
  {
    path: '',
    component: TambahpelangganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahpelangganPageRoutingModule {}
