import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  constructor(private http: HttpClient,private dataStored: UserService) { }

  data:any;
  sendData:any


  ngOnInit(): void {
    this.sendData = {
      username: this.dataStored.getData('username')
    }
      console.log(this.sendData.username)
    
    this.http.post('http://localhost:3000/shop-cart-view',this.sendData).subscribe((res) => {
      this.data = res;
    })
  }

}
