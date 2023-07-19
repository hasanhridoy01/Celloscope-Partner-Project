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
    //Email&Password Send Form Firebase...!
    this.auth.login(this.email, this.password);
    //Default Send...!
    this.email = '';
    this.password = '';
  }
}
