import { Component } from '@angular/core';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //type setup
  email: string = '';
  password: string = '';

  constructor(private auth : AuthService){ }

  login(){
    //Email Validate...!
    if(this.email == ''){
      alert("Please Enter Your Email");
      return;
    }
    //Password Validate...!
    if(this.password == ''){
      alert("Please Enter Your Password");
      return;
    }
    //Get User Information...!
    const user = {
      email: this.email
    };
    //Get Jwt Token....!
    fetch('http://localhost:5000/jwt', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(res => res.json()).then(data => {
      //Set Local Storage
      localStorage.setItem('token', data.token);
    })
    //Email&Password Send Form Firebase...!
    this.auth.login(this.email, this.password);
    //Default Send...!
    this.email = '';
    this.password = '';
  }
}
