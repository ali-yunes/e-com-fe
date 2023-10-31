import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDetailsI, ProductI} from "../models/products";
import {environment} from "../../environments/environment";

interface ProductsResult {
  products: ProductI[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl = environment.apiUrl+'/products';

  constructor(private http: HttpClient) {}

  getPaginatedProducts(searchTerm: string, category: string, page: string, limit: string): Observable<ProductsResult> {
    return this.http.get<ProductsResult>(this.apiUrl,{params: {searchTerm, category, page, limit}});
  }
  getProduct(id: string): Observable<ProductDetailsI> {
    return this.http.get<ProductDetailsI>(this.apiUrl +'/'+id);
  }

}
