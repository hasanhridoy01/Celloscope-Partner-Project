import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-single-partner',
  templateUrl: './single-partner.component.html',
  styleUrls: ['./single-partner.component.css']
})
export class SinglePartnerComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    alert();
  }
}