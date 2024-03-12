import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = environment.apiUrl+'/cart';
  private apiCheckOutUrl = environment.apiUrl+'/checkout';
  constructor(private http: HttpClient) { }

  addToCart(product: Product):Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product);
  }

  getCartItems(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  clearCart(): Observable<void>{
    return this.http.delete<void>(this.apiUrl);
  }

  checkout(products: Product[]): Observable<void>{
    return this.http.post<void>(this.apiCheckOutUrl,products);
  }
}
