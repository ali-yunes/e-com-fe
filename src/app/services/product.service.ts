import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

interface ProductI {
  id: string;
  name: string;
  category: string;
  price: number;
  discount: number;
  image: string;
  ratingAverage: number;
  reviewCount: number
}

interface ProductsResult {
  products: ProductI[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  getPaginatedProducts(searchTerm: string, category: string, page: string, limit: string): Observable<ProductsResult> {
    return this.http.get<ProductsResult>(this.apiUrl,{params: {searchTerm, category, page, limit}});
  }

}
