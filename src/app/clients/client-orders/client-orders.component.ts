import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../services/orders.service";
import {Order} from "../client.model";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-client-orders',
  templateUrl: './client-orders.component.html',
  styleUrls: ['./client-orders.component.css']
})
export class ClientOrdersComponent implements OnInit {
  orderClientCurrent:Order|undefined;
  //productsList: Order[] ;

  constructor(private route: ActivatedRoute, private orderService:OrderService){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('orderID');
      if (productId) {
        this.orderService.getOrderById(productId).subscribe((orderClientCurrent) => {
          this.orderClientCurrent = orderClientCurrent;
        });
      }
    });
  }
}
