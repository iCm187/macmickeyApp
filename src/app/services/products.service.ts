import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError,of,tap } from "rxjs";
import { ApiService } from './api.service';
import { Product } from '../../app/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService {
  private url='https://macmickey.azurewebsites.net/Address';

  constructor(private http: HttpClient) {
    super();
  }

  // recuperer toute les produits
  getAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.url).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,[]))
    );
  }

  // recuperer le produit par id
  getProductById(prodId : string):Observable<Product |undefined> {
    const prodUrlWithId = `${this.url}/${prodId}`;
    return this.http.get<Product>(prodUrlWithId).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,undefined))
    );
  }

  // recuperer les produits par type
  getProductByType(type : string):Observable<Product[]> {
    const productUrlByType = `${this.url}/type/${type}`;
    return this.http.get<Product[]>(productUrlByType).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,[]))
    );
  }

  private log (response:Product|Product[]|undefined){
    console.table(response);
  }

  private handleError(error:Error,errorValue:any){
    console.error(error);
    return of(errorValue)
  }

}
