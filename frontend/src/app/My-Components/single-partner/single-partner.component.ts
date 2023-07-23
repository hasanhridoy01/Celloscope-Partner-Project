import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-single-partner',
  templateUrl: './single-partner.component.html',
  styleUrls: ['./single-partner.component.css']
})
export class SinglePartnerComponent implements OnInit {

  constructor(private route: ActivatedRoute) 
  { 
    this.singleData
  }

  singleData: any;

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    
    //Database fetch...!
    fetch(`http://localhost:5000/api/v1/basicinfo/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.json()).then(data => {
      console.log(data.data);
      const single = data.data;
      this.singleData = single;
    });
  }
}