import { Component } from '@angular/core';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private auth: AuthService)
  { 
    this.getAllAccountManager();
  }

  //Type SetUp For Basic Form....!
  name: string = '';
  date: string = "YYYY-MM-DD";
  number: string = '';

  // partnerType Dropdown...!
  partnerType = [
    { value: 'IGW', label: 'IGW' },
    { value: 'ICX', label: 'ICX' },
    { value: 'IOS', label: 'IOS' },
    { value: 'ANS', label: 'ANS' },
    { value: 'INT', label: 'INT' }
  ];

  //Array initialization
  partnerType1 = [{}];

  //get partnerType2 Data
  partnerType2(e:any){
    var pvalue = e.value;
    this.partnerType1.includes = pvalue;
  };

  // partnerType Dropdown....!
  currency = [
    { value: 'BDT', label: 'BDT' },
    { value: 'USD', label: 'USD' }
  ];

  //Array initialization
  currency1 = [{}];

  //get currency Data
  currency2(e:any){
    var pvalue = e.value;
    this.currency1.includes = pvalue;
  };

  // timeZone Dropdown....!
  timeZone = [
    { value: 'Eastern Standard Time (EST)', label: 'Eastern Standard Time (EST)' },
    { value: 'Central Standard Time (CST)', label: 'Central Standard Time (CST)' },
    { value: 'Mountain Standard Time (MST)', label: 'Mountain Standard Time (MST)' },
    { value: 'India Standard Time (IST)', label: 'India Standard Time (IST)' },
    { value: 'China Standard Time (CST)', label: 'China Standard Time (CST)' }
  ];

  //Array initialization
  timeZone1 = [{}];

  //get timeZone Data
  timeZone2(e:any){
    var pvalue = e.value;
    this.timeZone1.includes = pvalue;
  };

  // billingCycle Dropdown....!
  billingCycle = [
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Yearly', label: 'Yearly' }
  ];

  //Array initialization
  billingCycle1 = [{}];

  //get timeZone Data
  billingCycle2(e:any){
    var pvalue = e.value;
    this.billingCycle1.includes = pvalue;
  };

  // billingCycle Dropdown....!
  status = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
    { value: 'Suspended', label: 'Suspended' }
  ];

  //Array initialization
  status1 = [{}];

  //get timeZone Data
  status2(e:any){
    var pvalue = e.value;
    this.status1.includes = pvalue;
  };

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

    //PartnerName Validate...!
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
      partnername: this.name,
      joining: this.date,
      accountnumber: this.number,
      partnertype: this.partnerType1.includes,
      currency: this.currency1.includes,
      timezone: this.timeZone1.includes,
      timebillingcyclezone: this.billingCycle1.includes,
      status: this.status1.includes
    };
    //Database fetch...!
    fetch('http://localhost:5000/api/v1/basicinfo', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(BasicInfo)
    }).then(res => res.json()).then(data => {
      alert(data.message);
    });
    //Empty value return from user..!
    this.name = '',
    this.date = '',
    this.number = '',
    this.partnerType1 = [],
    this.currency = [],
    this.timeZone = [],
    this.billingCycle = [],
    this.status = []
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
      partnerphonenumber: this.partnernumber,
      partneremailaddress: this.partneremail,
      partnernotificationemail: this.partnernotificationemail,
      VATregnumber: this.partnerVat,
      currencyrate: this.partnercurrency,
      contactaddress: this.partneraddress,
      billingaddress: this.partnerbillingaddress
    };
    //Database fetch...!
    fetch('http://localhost:5000/api/v1/partnerdetails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(PartnerDetailsInfo)
    }).then(res => res.json()).then(data => {
      alert(data.message);
    });
    this.partnernumber = '';
    this.partneremail = '';
    this.partnernotificationemail = '';
    this.partnerVat = '';
    this.partnercurrency = '';
    this.partneraddress = '';
    this.partnerbillingaddress = '';
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
      managername: this.managerName,
      managerphone: this.managerPhone,
      manageremail: this.manageremail,
      systementrydate: this.systementryDate
    };
    //Database fetch...!
    fetch('http://localhost:5000/api/v1/accountmanagerinfo', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(AccountManagerInfo)
    }).then(res => res.json()).then(data => {
      alert(data.message);
    });
    this.managerID = '',
    this.managerName = '',
    this.managerPhone = '',
    this.manageremail = '',
    this.systementryDate = ''
  };

  //Get all BasicInFormation Data Form Database
  getAllBasicInfo(){
    //Database fetch...!
    fetch('http://localhost:5000/api/v1/basicinfo', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(res => {
      if(res.status === 401 || res.status === 403){
        this.logout();
      }
      return res.json();
    }).then(data => {
      console.log(data.data);
    });
  };

  //Get all PartnerDetails Data Form Database
  getAllPartnerDetails(){
    //Database fetch...!
    fetch('http://localhost:5000/api/v1/partnerdetails', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(res => {
      if(res.status === 401 || res.status === 403){
        this.logout();
      }
      return res.json();
    }).then(data => {
      console.log(data.data);
    });
  };

   //Get all AccountManager Data Form Database
   getAllAccountManager(){
    //Database fetch...!
    fetch('http://localhost:5000/api/v1/accountmanagerinfo', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(res => {
      if(res.status === 401 || res.status === 403){
        this.logout();
      }
      return res.json();
    }).then(data => {
      console.log(data.data);
    });
  };

  //logout user....!
  logout(){
    this.auth.logout();
  };
}
