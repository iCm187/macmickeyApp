import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError,of,tap } from "rxjs";
import { ApiService } from './api.service';
import {Order} from "../clients/client.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService extends ApiService {
  private url='https://macmickey.azurewebsites.net/Address';

  constructor(private http: HttpClient) {
    super();
  }

  // Récupérer toutes les commandes
  getAllOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,[]))
    );
  }

  // Récupérer une commande via son ID
  getOrderById(orderId: string): Observable<Order | undefined> {
    const orderUrlWithId = `${this.url}/${orderId}`;
    return this.http.get<Order>(orderUrlWithId).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,undefined))
    );
  }
  // Récupérer les commandes actives
  getOrderActivated(): Observable<Order[]> {
    const orderUrlActive = `${this.url}/active`;
    return this.http.get<Order[]>(orderUrlActive).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,[]))
    );
  }

  private log (response:Order|Order[]|undefined){
    console.table(response);
  }

  private handleError(error:Error,errorValue:any){
    console.error(error);
    return of(errorValue)
  }
}
