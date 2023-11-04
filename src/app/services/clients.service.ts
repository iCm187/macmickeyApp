import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError,of,tap } from "rxjs";
import { ApiService } from './api.service';
import { Client } from '../../app/clients/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ApiService {
  private url = `${this.BASE_URL}/Client`;
  constructor(private http: HttpClient) {
    super();
  }

  getClientInfo(): Observable<Client | undefined> {
    return this.http.get<Client>(this.url).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,undefined))
    );
  }

  private log (response:Client|undefined){
    console.table(response);
  }

  private handleError(error:Error,errorValue:any){
    console.error(error);
    return of(errorValue)
  }
}
