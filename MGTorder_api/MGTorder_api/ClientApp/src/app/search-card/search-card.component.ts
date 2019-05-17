import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { forEach } from '@angular/router/src/utils/collection';




@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  url:string
  colors:string
 

  ngOnInit() {
  }
  
  

  constructor(private RestAPI:ApiService) {

    RestAPI.GetSet("https://api.scryfall.com/sets")
    this.RestAPI.GetCard("https://api.scryfall.com/cards")
    RestAPI.GetMyCard("https://localhost:44329/api/Cards")
  }
  
  setValue(){
    
    if(this.RestAPI.searchName==""&& this.RestAPI.searchSet==""&&this.isEmpty(this.RestAPI.selectedColors)){
      this.RestAPI.GetCard("https://api.scryfall.com/cards")
    }
   else if(this.RestAPI.searchName==""&& this.RestAPI.searchSet!=""&&this.isEmpty(this.RestAPI.selectedColors)){
    this.RestAPI.GetCard("https://api.scryfall.com/cards/search?q=set%3A"+this.RestAPI.searchSet)
     
    }
    else if(this.RestAPI.searchName!=""&& this.RestAPI.searchSet==""&&this.isEmpty(this.RestAPI.selectedColors)){
      this.RestAPI.GetCard("https://api.scryfall.com/cards/search?q="+this.RestAPI.searchName)
     
    }
    else if(this.RestAPI.searchName==""&& this.RestAPI.searchSet==""&&!this.isEmpty(this.RestAPI.selectedColors)){
      
      this.url="https://api.scryfall.com/cards/search?q=color%3D"
      for(let color of this.RestAPI.selectedColors){
        
        
        this.url+=color
      }
      this.RestAPI.GetCard(this.url)
     
    }
    else{
      this.url=""
      if(!this.isEmpty(this.RestAPI.selectedColors)){
        this.url="+color%3D"
        for(let color of this.RestAPI.selectedColors){
          
          this.url+=color
        }
      }
      
      this.RestAPI.GetCard("https://api.scryfall.com/cards/search?q="+this.RestAPI.searchName+"+set%3A"+this.RestAPI.searchSet+this.url)
    }
  }
  ViewValue(object){
    this.RestAPI.thisCard=object
  }
  AdvancedTrue(){
    this.RestAPI.Advanced= !this.RestAPI.Advanced
  }
   isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }
  
}
