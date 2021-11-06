import { CategoryResponseModel } from './../models/categoryResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url="https://localhost:44364/api/yeditepecategories/getall";
  constructor(private http:HttpClient) { }

  getCategories():Observable<CategoryResponseModel>{
    return this.http.get<CategoryResponseModel>(this.url);
  }
}
