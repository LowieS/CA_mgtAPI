import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SearchCardComponent } from './search-card/search-card.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
import { ViewCardComponent } from './view-card/view-card.component';
import {PanelModule} from 'primeng/panel';

import {AccordionModule} from 'primeng/accordion';
import {CheckboxModule} from 'primeng/checkbox';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthServiceService } from './auth-service.service';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SearchCardComponent,
    ViewCardComponent,
    ProfileComponent,
    OrdersComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: SearchCardComponent },
      { path: 'ViewCard', component: ViewCardComponent },
      { path: 'profile', component:ProfileComponent },
      { path: 'orders', component:OrdersComponent },
      { path: 'callback', component: CallbackComponent },
    ]),
    ButtonModule,
    PanelModule,
    AccordionModule,
    CheckboxModule
    
  ],
  providers: [
    ApiService,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
