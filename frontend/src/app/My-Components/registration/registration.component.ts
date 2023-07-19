import { Component } from '@angular/core';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  //type setup
  email: string = '';
  password: string = '';

  constructor(private auth : AuthService){ }

  register(){
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
    this.auth.register(this.email, this.password);
    //Default Send...!
    this.email = '';
    this.password = '';
  }
}
