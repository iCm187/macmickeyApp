import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { AddressService } from './services/address.service';
import { CountryService } from './services/country.service';
import { ClientService } from './services/clients.service';
import { OrderService } from './services/orders.service';
import { ProductService } from './services/products.service';
import {CommonModule} from "@angular/common";
import { NavbarComponent } from './navbar/navbar.component';
import {ClientsModule} from "./clients/clients.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsModule,
    CommonModule
  ],
  providers: [
    AddressService,
    ClientService,
    CountryService,
    OrderService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
