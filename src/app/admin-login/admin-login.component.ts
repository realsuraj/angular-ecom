import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {


  message:String = '';

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login(val:any){
    console.log(val)
    let responseFromServer:any;


   this.http.post('http://localhost:3000/adminlogin',val).subscribe(
      (res) => { responseFromServer = res; 
        console.log(res);
        
        if(responseFromServer.message == "Success_login"){
          this.router.navigate(['/admin-homepage'],{queryParams: val.username})
          sessionStorage.setItem('adminUsername',val.username)
        }
        else{
          this.message = 'Username or Password Incorrect'
        }
      },          
      )
     
  }
}
