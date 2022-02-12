import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  message:String = '';

  constructor(private http:HttpClient, private router: Router,private dataStored: UserService) { }

  ngOnInit(): void {
    
  }

  login(val:any){
    console.log(val)
    let responseFromServer:any;
    this.http.post('http://localhost:3000/login',val).subscribe(
      (res) => { responseFromServer = res; 
        console.log(responseFromServer);
        if(responseFromServer.message == "Success"){
          //this is used for storing in service
          this.dataStored.setData('username',val.username);
          //storing in local storage
          sessionStorage.setItem('username',val.username)

          this.router.navigate(['/home'],{queryParams: val.username})
        }
        else{
          this.message = 'Username or Password Incorrect'
        }

        
      },
       
      )
     
  }
}
