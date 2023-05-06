import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-pelanggan',
  templateUrl: './pelanggan.page.html',
  styleUrls: ['./pelanggan.page.scss'],
})
export class PelangganPage implements OnInit {

  pelanggans : any;
  KEY = "pelanggan";
  
  constructor(public storage : StorageService,protected activeRoute: ActivatedRoute) { }
  
  async ngOnInit() {
    console.log("ngOnInit pelanggan page");
    await this.getDataPelanggan();      
  }

  async ionViewWillEnter() {
    console.log("IONVIEWWILLENTER");
    await this.getDataPelanggan();
  }

  async getDataPelanggan() {
    const data = await this.storage.get(this.KEY);
    if (data) {
      this.pelanggans=data;
    }
  }

  
  ngOnDestroy() {
    console.log("NGONDESTROY PELANGGAN PAGE");
  }


}
