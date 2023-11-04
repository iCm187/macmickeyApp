import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError,of,tap } from "rxjs";
import { ApiService } from './api.service';
import { Country } from '../../app/clients/client.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends ApiService {
  private url = `${this.BASE_URL}/Country`;
  constructor(private http: HttpClient) {
    super();
  }

  // Récupérer toutes les countries
  getAllCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,[]))
    );
  }

  // Récupérer une country via son code
  getCountryWithCode(countryCode: string): Observable<Country | undefined> {
    const countryUrlWithCode = `${this.url}/${countryCode}`;
    return this.http.get<Country>(countryUrlWithCode).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,undefined))
    );
  }

  // Récupérer une country via son nom
  getCountryWithName(countryName: string): Observable<Country | undefined> {
    const countryUrlWithName = `${this.url}/${countryName}`;
    return this.http.get<Country>(countryUrlWithName).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,undefined))
    );
  }

  private log (response:Country|Country[]|undefined){
    console.table(response);
  }


  private handleError(error:Error,errorValue:any){
    console.error(error);
    return of(errorValue)
  }
}


export { Country };
