import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  images:any ;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  OnSubmit(val:any){
    console.log(val)


    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/addProductImage', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );

    
    this.http.post('http://localhost:3000/AddProduct', val).subscribe((res) => {
      console.log(res)
    })
  }

  upload($event:any){
    if ($event.target.files.length > 0) {
     const file = $event.target.files[0];
     this.images = file;
     console.log(this.images)
   }
 }

}
