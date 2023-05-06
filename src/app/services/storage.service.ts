import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor() { }

  async set(key: string, value: any) {
    // check if existed value
    var arr:any[]=[]; 
    const existedData = await this.gets(key);
    if (existedData.value != null) {
      arr = JSON.parse(existedData.value);
      if (!this.cekExistedObj(value, arr)) {
        arr.push(value);
      } else {
        return false;     
      }
    } else {
      arr.push(value);       
    }    
    
    await Preferences.set({
      key: key,
      value: JSON.stringify(arr),
    });
    return true;
  }

  async gets(key: string): Promise<any> {
    return new Promise(resolve => {
      Preferences.get({ key: key }).then((data) => {
        if(data){
          resolve(data);
        }    
      });    
    }) 
  }

  async get(key:string) {
    const item = await Preferences.get({ key: key });
    if (item.value !== null) {
      return JSON.parse(item.value);
    } else {
      return false;
    }
  }

  async remove(key: string): Promise<void> {
    await Preferences.remove({ key: key });
  }

  async  clear() {
      await Preferences.clear();
  } 

  cekExistedObj(valuenya:any, objeknya:any) {
    var i;
    for (i = 0; i < objeknya.length; i++) {
        if (JSON.stringify(objeknya[i]) == JSON.stringify(valuenya)) {
            return true;
        } 
    }
    return false;  
  }
}
