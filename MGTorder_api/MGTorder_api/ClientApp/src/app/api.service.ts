import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  public CardList: CardObject
  public SetList: SetObject
  public MyCardList: MyCardObject[]
  public ThisCustomer:CustomerObject
  public thisCard:Datum
  public searchName:String =""
  public searchSet:string=""
  public selectedColors: string[] = [];
  Availeble:boolean
  public ProfileName:string
  public CardOrderList:MyCardObject[]=[];
  public Login: boolean
 
  public Advanced:boolean = false
  constructor(private Http:HttpClient) { 
    this.CardList=null
    this.SetList=null
    this.MyCardList=null
    this.ProfileName="Profile"
    this.ThisCustomer=null
    
    
    this.Login=false
    
  }
  checkAvaileble(Name:string){
    this.Availeble=false
    
    for(let card of this.MyCardList){
        if(card.name==Name){
          this.Availeble=true
        }
    }
    return this.Availeble
    //return this.MyCardList.findIndex(c=> c.name == Name) >= 0 ? true : false;
  }
  AddToOrder(Name:string){
    for(let card of this.MyCardList){
      if(card.name==Name){
        this.CardOrderList.push(card)
        console.log(card.name)
      }
  }
  }

  GetCard(URL:string){
    this.Http.get<CardObject>(URL).subscribe(result => {
      this.CardList = result;
    }, error => console.error(error));
  }
  GetSet(URL:string){
    this.Http.get<SetObject>(URL).subscribe(result => {
      this.SetList = result;
    }, error => console.error(error));
  }

  GetMyCard(URL:string){
    this.Http.get<MyCardObject[]>(URL).subscribe(result => {
      this.MyCardList = result;
    }, error => console.error(error));
  }
  GetCustomer(URL:string){
    this.Http.get<CustomerObject>(URL).subscribe(result => {
      this.ThisCustomer = result;
    }, error => console.error(error));
  }

}

export interface ImageUris {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
}

export interface Legalities {
  standard: string;
  future: string;
  frontier: string;
  modern: string;
  legacy: string;
  pauper: string;
  vintage: string;
  penny: string;
  commander: string;
  duel: string;
  oldschool: string;
}

export interface Prices {
  usd: string;
  usd_foil: string;
  eur: string;
  tix: string;
}

export interface RelatedUris {
  gatherer: string;
  tcgplayer_decks: string;
  edhrec: string;
  mtgtop8: string;
}

export interface PurchaseUris {
  tcgplayer: string;
  cardmarket: string;
  cardhoarder: string;
}

export interface AllPart {
  object: string;
  id: string;
  component: string;
  name: string;
  type_line: string;
  uri: string;
}

export interface ImageUris2 {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
}

export interface CardFace {
  object: string;
  name: string;
  mana_cost: string;
  type_line: string;
  oracle_text: string;
  colors: string[];
  power: string;
  toughness: string;
  artist: string;
  illustration_id: string;
  image_uris: ImageUris2;
  color_indicator: string[];
}

export interface Datum {
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids: number[];
  mtgo_id: number;
  mtgo_foil_id: number;
  tcgplayer_id: number;
  name: string;
  lang: string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: string;
  highres_image: boolean;
  image_uris: ImageUris;
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  power: string;
  toughness: string;
  colors: string[];
  color_identity: string[];
  legalities: Legalities;
  games: string[];
  reserved: boolean;
  foil: boolean;
  nonfoil: boolean;
  oversized: boolean;
  promo: boolean;
  reprint: boolean;
  set: string;
  set_name: string;
  set_uri: string;
  set_search_uri: string;
  scryfall_set_uri: string;
  rulings_uri: string;
  prints_search_uri: string;
  collector_number: string;
  digital: boolean;
  rarity: string;
  watermark: string;
  flavor_text: string;
  illustration_id: string;
  artist: string;
  border_color: string;
  frame: string;
  full_art: boolean;
  story_spotlight: boolean;
  edhrec_rank: number;
  usd: string;
  eur: string;
  tix: string;
  prices: Prices;
  related_uris: RelatedUris;
  purchase_uris: PurchaseUris;
  arena_id?: number;
  loyalty: string;
  all_parts: AllPart[];
  card_faces: CardFace[];
  frame_effect: string;
}

export interface CardObject {
  object: string;
  total_cards: number;
  has_more: boolean;
  data: Datum[];
}




export interface DatumSet {
  object: string;
  id: string;
  code: string;
  name: string;
  uri: string;
  scryfall_uri: string;
  search_uri: string;
  released_at: string;
  set_type: string;
  card_count: number;
  digital: boolean;
  foil_only: boolean;
  block_code: string;
  block: string;
  icon_svg_uri: string;
  mtgo_code: string;
  tcgplayer_id: number;
  parent_set_code: string;
}

export interface SetObject {
  object: string;
  has_more: boolean;
  data: DatumSet[];
}

export interface MyCardObject {
  id: number;
  name: string;
  set: string;
  amount: number;
}
export interface CustomerObject {
  id: number;
  username: string;
  myorders?: any;
}
