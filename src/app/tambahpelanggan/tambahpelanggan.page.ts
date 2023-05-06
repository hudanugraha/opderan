import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { Toast } from '@capacitor/toast';
import { Router } from '@angular/router';   
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tambahpelanggan',
  templateUrl: './tambahpelanggan.page.html',
  styleUrls: ['./tambahpelanggan.page.scss'],
})
export class TambahpelangganPage implements OnInit {
  formPelanggan : FormGroup;
  isSubmitted = false;
  isExisted = false;

  constructor(public formBuilder: FormBuilder, public storage : StorageService,private router: Router,private loadingCtrl: LoadingController) { }

  ngOnInit() {  
    // this.storage.clear();
    // this.storage.remove("pelanggan");
    // return false;

    this.formPelanggan = this.formBuilder.group({
      nama: ['', [Validators.required, Validators.minLength(4)]],
      no_hp: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10)]]
    });
  }

  get errorControl() {
    // if (this.formPelanggan.controls['nama'].errors) {
    //   console.log(this.formPelanggan.controls['nama'].errors);
    // }
    return this.formPelanggan.controls;
  }
  
  async submitForm() {
    const loading = await this.loadingCtrl.create({
      message: 'Menyimpan...',
      duration: 3000,
    });
    loading.present();

    this.isSubmitted = true;
    this.isExisted = false;
    
    

    if (!this.formPelanggan.valid) {
      console.log('Please provide all the required values!')
      loading.dismiss();
      return false;
    } else {
      const hasil=await this.storage.set("pelanggan", this.formPelanggan.value);
      loading.dismiss();
      if (!hasil) {
        this.isExisted = true ;
        return false;
      } 
      await Toast.show({
        text: "Berhasil disimpan",
        duration: 'short',        
      });
      this.formPelanggan.reset();
      this.router.navigate(['tabs/pelanggan']);              
    }
    return true;    
  }


}
