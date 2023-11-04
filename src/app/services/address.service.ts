import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError,of,tap } from "rxjs";
import { ApiService } from './api.service';
import { Address } from '../../app/clients/client.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends ApiService {
  private url = `${this.BASE_URL}/Address`;
  constructor(private http: HttpClient) {
    super();
  }

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.url).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError<Address[]>(error, []))
    );
  }

  getAddressById(addressID: string): Observable<Address | undefined> {
    const addressUrl = `${this.url}/${addressID}`;
    return this.http.get<Address>(addressUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError<Address | undefined>(error, undefined))
    );
  }

  createAddress(newAddress: Address): Observable<Address | undefined> {
    return this.http.post<Address>(this.url, newAddress).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError<Address | undefined>(error, undefined))
    );
  }

  private log(response: Address | Address[] | undefined): void {
    console.table(response);
  }

  private handleError<T>(error: Error, errorValue: T): Observable<T> {
    console.error(error);
    return of(errorValue);
  }
}

export { Address };
