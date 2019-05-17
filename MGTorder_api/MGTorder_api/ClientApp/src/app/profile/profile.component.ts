import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Username:string

  constructor(private RestAPI:ApiService) { 
    this.Username=""

  }

  ngOnInit() {
  }

  Login(){
    this.RestAPI.GetCustomer("https://localhost:44329/api/Customer/"+this.Username)
    this.RestAPI.ProfileName=this.RestAPI.ThisCustomer.username
    this.RestAPI.Login=true
  }

}
