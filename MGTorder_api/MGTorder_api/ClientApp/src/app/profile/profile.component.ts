import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Username:string
  profile: any;

  constructor(private RestAPI:ApiService,public auth:AuthServiceService) { 
    this.Username=""
    auth.handleAuthentication();

  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
    }
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  Login(){
    this.RestAPI.GetCustomer("https://localhost:44329/api/Customer/"+this.Username)
    this.RestAPI.ProfileName=this.RestAPI.ThisCustomer.username
    this.RestAPI.Login=true
  }

}
