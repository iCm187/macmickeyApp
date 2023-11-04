import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { Product } from "../product.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productsList: Product[] =[] ;

  constructor(private productService: ProductService, private router: Router) {}


  ngOnInit(): void {
    this.productService.getAllProduct()
      .subscribe(productsList=>this.productsList = productsList);
  }

  getProductCardClass(product: Product): string {
    switch (product.productType) {
      case 'burger':
        return 'product-card burger';
      case 'beverage':
        return 'product-card beverage';
      case 'side':
        return 'product-card side';
      case 'dessert':
        return 'product-card dessert';
      default:
        return 'product-card';
    }
  }

  selectProduct(product: Product) {
    this.router.navigate(['/produits/liste-produits', product.productID]);
  }

}
