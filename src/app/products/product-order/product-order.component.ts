import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import {Product} from "../product.model";

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {
  productsOrderList: Product[] = [];
  selectedQuantities: Map<number, number> = new Map();
  confirmationMessage: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      products => {
        this.productsOrderList = products.filter(product => product.stockpiled > 0);
      },
      error => {
        console.error('Erreur lors de la récupération des produits', error);
      }
    );
  }


  getProductCardClass(productType: Product): string {
    return `product-card ${productType}`;
  }

  updateQuantity(productId: Product, quantity: number): void {
    // @ts-ignore
    this.selectedQuantities.set(productId, quantity);
  }

  confirmOrder(product: Product): void {
    const quantity = this.selectedQuantities.get(product.productID) || 0;
    this.confirmationMessage = `Commande confirmée : ${quantity} ${product.name}`;

    console.log(this.confirmationMessage);
  }
}
