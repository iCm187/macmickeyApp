import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';
import {Country} from "../client.model";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  address: any = {};
  countries: Country[] = [];

  constructor(
    private addressService: AddressService,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // Récupérer la liste de tous les pays
    this.countryService.getAllCountry().subscribe((countries) => {
      this.countries = countries;
    });
  }

  addUserAddress() {
    this.addressService.createAddress(this.address).subscribe((newAddress) => {
      console.log('Adresse ajoutée avec succès : ', newAddress);
    });
  }
}
