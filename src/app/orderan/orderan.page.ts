import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderan',
  templateUrl: './orderan.page.html',
  styleUrls: ['./orderan.page.scss'],
})
export class OrderanPage implements OnInit {
  
  namatoko:any;
  segmen= "akandatang";
  hitung=1;
  namadata="orderan";

  constructor() { 
    this.namatoko="@dapuraya";
  }

  async ngOnInit() {    
    this.getData();
  }

  gantiSegment(event:any) {
    console.log(event.detail.value);
    this.segmen=event.detail.value;
  }

  async getData() {
    // const res=await this.storageServis.get(this.namadata);
    // console.log(`DATA SEKARANG UNTUK KEY ${this.namadata}`,res);
  }

  async addData() {
    this.hitung++;
    // await this.storageServis.set(this.namadata, this.hitung);
    // this.getData();
  }

}
