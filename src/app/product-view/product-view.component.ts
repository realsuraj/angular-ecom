import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

 
  constructor(private activeroute: ActivatedRoute, private route: Router, private http: HttpClient, private dataStored: UserService) {}

  productData = {
    username: sessionStorage.getItem('username'),
    product_name: this.dataStored.getData('product_name'),
    product_price: this.dataStored.getData('product_price'),
    product_description: this.dataStored.getData('product_description'),
    product_discount: this.dataStored.getData('product_discount'),
    product_image_location: this.dataStored.getData('product_image_location'),
    
  };
  localLocationImage = 'http://localhost:3000/uploads/ProductImage_';

  ngOnInit() {
  }

  

  AddCart(){
    
    this.http.post('http://localhost:3000/AddCart',this.productData).subscribe((res) => {
      console.log('inserting in card')
      console.log(res)
    } ,(err) => console.log(err))
  }

}
