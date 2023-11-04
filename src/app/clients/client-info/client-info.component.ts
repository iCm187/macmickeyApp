import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/clients.service";
import {Client} from "../client.model";


@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  clientData:Client|undefined;

  constructor( private clientService: ClientService){}

  ngOnInit(): void {
    this.clientService.getClientInfo()
      .subscribe(clientData=>this.clientData = clientData);
  }
}
