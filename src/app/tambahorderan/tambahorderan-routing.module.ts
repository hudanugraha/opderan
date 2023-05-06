import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahorderanPage } from './tambahorderan.page';

const routes: Routes = [
  {
    path: '',
    component: TambahorderanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahorderanPageRoutingModule {}
