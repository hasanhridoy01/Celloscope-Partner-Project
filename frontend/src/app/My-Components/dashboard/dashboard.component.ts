import { Component } from '@angular/core';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private auth: AuthService){ }

  //Type SetUp For Basic Form....!
  name: string = '';
  date: string = "YYYY-MM-DD";
  number: string = '';
  partnerType: string = '';
  currency: string = '';
  timeZone: string = '';
  billingCycle: string = '';
  status: string = '';

  //Type SetUp For Partner Form....!
  partnernumber: string = '';
  partneremail: string = '';
  partnernotificationemail: string = '';
  partnerVat: string = '';
  partnercurrency: string = '';
  partneraddress: string = '';
  partnerbillingaddress: string = '';

  //Type SetUp For AccountManager Form....!
  managerID: string = '';
  managerName: string = '';
  managerPhone: string = '';
  manageremail: string = '';
  systementryDate: string = "YYYY-MM-DD";

  //Get All Data From BasicInfo Form....!
  basicInfo(){
    //Name Validate...!
    if(this.name == ''){
      alert("Please Enter Your Name");
      return;
    }
    //Date Validate...!
    if(this.date == ''){
      alert("Please Enter Your Date");
      return;
    }
    //Number Validate...!
    if(this.number == ''){
      alert("Please Enter Your Number");
      return;
    }
    //Get Form Info....!
    const BasicInfo = {
      name: this.name,
      date: this.date,
      number: this.number
    };
    //Database fetch...!
    fetch('http://localhost:5000/api/v1/basicinfo', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(BasicInfo)
    }).then(res => res.json()).then(data => {
      console.log(data);
    });
  };

  //Get All Data From partnerDetails Form.....!
  partnerDetails(){
    //Number Validate...!
    if(this.partnernumber == ''){
      alert("Please Enter Your partnernumber");
      return;
    }
    //partneremail Validate...!
    if(this.partneremail == ''){
      alert("Please Enter Your partneremail");
      return;
    }
    //partnernotificationemail Validate...!
    if(this.partnernotificationemail == ''){
      alert("Please Enter Your partnernotificationemail");
      return;
    }
    //partnerVat Validate...!
    if(this.partnerVat == ''){
      alert("Please Enter Your partnerVat");
      return;
    }
    //partnercurrency Validate...!
    if(this.partnernumber == ''){
      alert("Please Enter Your partnercurrency");
      return;
    }
    //partneraddress Validate...!
    if(this.partnernumber == ''){
      alert("Please Enter Your partneraddress");
      return;
    }
    //partnerbillingaddress Validate...!
    if(this.partnerbillingaddress == ''){
      alert("Please Enter Your partnerbillingaddress");
      return;
    }
    //Get Form Info....!
    const PartnerDetailsInfo = {
      partnernumber: this.partnernumber,
      partneremail: this.partneremail,
      partnernotificationemail: this.partnernotificationemail,
      partnerVat: this.partnerVat,
      partnercurrency: this.partnercurrency,
      partneraddress: this.partneraddress,
      partnerbillingaddress: this.partnerbillingaddress
    };
    //Database fetch...!
    fetch('http://localhost:5000/api/v1/partnerdetails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(PartnerDetailsInfo)
    }).then(res => res.json()).then(data => {
      console.log(data);
    });
  };

  //Get All Data From accountManagerInfo Form.....!
  accountManagerInfo(){
    //managerID Validate...!
    if(this.managerID == ''){
      alert("Please Enter Your managerID");
      return;
    }
    //managerName Validate...!
    if(this.managerName == ''){
      alert("Please Enter Your managerName");
      return;
    }
    //managerPhone Validate...!
    if(this.managerPhone == ''){
      alert("Please Enter Your managerPhone");
      return;
    }
    //manageremail Validate...!
    if(this.manageremail == ''){
      alert("Please Enter Your manageremail");
      return;
    }
    //systementryDate Validate...!
    if(this.systementryDate == ''){
      alert("Please Enter Your systementryDate");
      return;
    }
    //Get Form Info....!
    const AccountManagerInfo = {
      managerID: this.managerID,
      managerName: this.managerName,
      managerPhone: this.managerPhone,
      manageremail: this.manageremail,
      systementryDate: this.systementryDate
    };
    //Database fetch...!
    fetch('http://localhost:5000/api/v1/accountmanagerinfo', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(AccountManagerInfo)
    }).then(res => res.json()).then(data => {
      console.log(data);
    });
  }

  //logout user....!
  logout(){
    this.auth.logout();
  };
}
