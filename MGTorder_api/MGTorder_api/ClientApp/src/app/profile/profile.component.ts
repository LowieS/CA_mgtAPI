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
  
  firstcheck:boolean

  constructor(private RestAPI:ApiService,public auth:AuthServiceService) { 
    this.Username=""
    auth.handleAuthentication();
    this.firstcheck=true

  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      //this.auth.renewTokens();
    }
   
    
  }
  getinfo():boolean{
    if(this.firstcheck){
      if (this.auth.userProfile) {
        this.RestAPI.profile = this.auth.userProfile;
      } else {
        this.auth.getProfile((err, profile) => {
          this.RestAPI.profile = profile;
        console.log(this.RestAPI.profile)  
        });
      }
      this.checkNewUser()
      this.firstcheck=false
  }
    return true
  }

  

  checkNewUser(){
    
      console.log("post")
      
        this.RestAPI.PostCustomer("https://localhost:44329/api/Customer",this.RestAPI.profile.nickname)
        this.RestAPI.GetCustomer("https://localhost:44329/api/Customer/"+this.RestAPI.profile.nickname)
        
      
    
  }

}
