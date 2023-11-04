import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductOrderComponent } from './products/product-order/product-order.component';

import { ClientInfoComponent } from './clients/client-info/client-info.component';
import { ClientOrdersComponent } from './clients/client-orders/client-orders.component';
import { ClientAddressesComponent } from './clients/client-addresses/client-addresses.component';
import { AddressFormComponent } from './clients/address-form/address-form.component';

const routes: Routes = [
    { path: 'products', component: ProductsListComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'order', component: ProductOrderComponent },
    { path: 'client/info', component: ClientInfoComponent },
    { path: 'client/orders', component: ClientOrdersComponent },
    { path: 'client/addresses', component: ClientAddressesComponent },
    { path: 'client/address', component: AddressFormComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
