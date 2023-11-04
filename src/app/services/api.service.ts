import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected readonly BASE_URL = 'https://macmickey.azurewebsites.net/';
  constructor() { }
}
