import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddressFormComponent} from "./address-form/address-form.component";
import {ClientInfoComponent} from "./client-info/client-info.component";
import {ClientOrdersComponent} from "./client-orders/client-orders.component";
import {ClientAddressesComponent} from "./client-addresses/client-addresses.component";

@NgModule({
  declarations: [
    AddressFormComponent,
    ClientInfoComponent,
    ClientOrdersComponent,
    ClientAddressesComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
})
export class ClientsModule { }
