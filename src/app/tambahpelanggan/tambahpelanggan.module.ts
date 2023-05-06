import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahpelangganPageRoutingModule } from './tambahpelanggan-routing.module';

import { TambahpelangganPage } from './tambahpelanggan.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahpelangganPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TambahpelangganPage]
})
export class TambahpelangganPageModule {}
