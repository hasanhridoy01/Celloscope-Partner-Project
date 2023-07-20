import { Component } from '@angular/core';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private auth: AuthService){ }

  //Get All Data From BasicInfo Form
  basicInfo(){
    alert('hello this is basicInfo');
  };

  //Get All Data From partnerDetails Form
  partnerDetails(){
    alert('hello this is partnerDetail');
  };

  //Get All Data From accountManagerInfo Form
  accountManagerInfo(){
    alert('hello this is accountManagerInfo');
  }

  //logout user....!
  logout(){
    this.auth.logout();
  };
}
