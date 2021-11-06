import { ProductResponseModel } from './../models/productResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="https://localhost:44364/api/yeditepeproducts/getall";
  constructor(private http:HttpClient) { }

  getProducts():Observable<ProductResponseModel>{
    return this.http.get<ProductResponseModel>(this.url);
  }
}
