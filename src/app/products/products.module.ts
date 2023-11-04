import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import {AppModule} from "../app.module";
import {QuantitySelectorComponent} from "../quantity-selector/quantity-selector.component";

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    ProductOrderComponent,
    QuantitySelectorComponent
  ],
    imports: [
        CommonModule,
        AppModule,
    ],
  exports: [
    ProductOrderComponent
  ]
})
export class ProductsModule { }

