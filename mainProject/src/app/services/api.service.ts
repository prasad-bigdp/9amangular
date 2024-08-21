import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private hc: HttpClient) {}
  getData() {
    return this.hc.get('https://dummyjson.com/products');
  }
  getCategoryData(cat:string) {
    return this.hc.get(`https://dummyjson.com/products/category/${cat}`);
  }
  getSingleProduct(id: number)
  {
    return this.hc.get(`https://dummyjson.com/products/${id}`);
  }
}
