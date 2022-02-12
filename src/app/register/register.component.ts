import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  message:String = '';

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login(val:any){
    console.log(val)
    let responseFromServer:any;
    this.http.post('http://localhost:3000/register',val).subscribe(
      (res) => { responseFromServer = res; 
        console.log(responseFromServer);
        if(responseFromServer.message == "Success"){
          this.router.navigate(['/home'],{queryParams: val.username})
        }
        else{
          this.message = 'Username or Password Incorrect'
        }

        
      },
       
      )
     
  }
}
