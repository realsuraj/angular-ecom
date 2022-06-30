import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';


@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})

export class AdminHomepageComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private dataStored: UserService) { }
  data: any;
  sendData:any;

  ngOnInit(): void {
    this.sendData = {
      username: sessionStorage.getItem('adminUsername')
    }
    console.log(this.sendData.username);
    console.log("testing")

    console.log(this.sendData.username)
    
    this.http.post('http://localhost:3000/admin-hompage',this.sendData).subscribe((res) => {
      console.log(res)
      this.data = res;
    })
  
  }



}
