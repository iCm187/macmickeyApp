import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-client-addresses',
  templateUrl: './client-addresses.component.html',
  styleUrls: ['./client-addresses.component.css']
})
export class ClientAddressesComponent implements OnInit {
  addresses: any[] | undefined;

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe(data => {
      this.addresses = data;
    });
  }
}
