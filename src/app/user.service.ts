import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  
  private data:any = [];
  setData(key:any, data:any) {
    this.data[key] = data;
  }
  getData(key:any) {
    return this.data[key];
  }
}
