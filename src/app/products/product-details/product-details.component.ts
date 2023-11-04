import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from "../../services/products.service";
import {Product} from "../product.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  productCurrent:Product|undefined;

  constructor(private route: ActivatedRoute, private productService:ProductService){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('productID');
      if (productId) {
        this.productService.getProductById(productId).subscribe((productCurrent) => {
          this.productCurrent = productCurrent;
        });
      }
    });
  }


}
