import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahorderanPageRoutingModule } from './tambahorderan-routing.module';

import { TambahorderanPage } from './tambahorderan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahorderanPageRoutingModule
  ],
  declarations: [TambahorderanPage]
})
export class TambahorderanPageModule {}
