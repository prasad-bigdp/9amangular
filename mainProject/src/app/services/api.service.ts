import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private hc: HttpClient) { }
  arr:any[]=[]
  private cartSubject = new BehaviorSubject(0);
  countObs= this.cartSubject.asObservable()
  private cartItemsSubject = new BehaviorSubject(this.arr);
  itemsObs= this.cartItemsSubject.asObservable()
  getItemsCount()
  {
    return this.cartSubject.getValue()
  }
  getItems()
  {
    return this.cartItemsSubject.getValue()
  }
  add(item: any) {
    const count = this.cartSubject.getValue();
    this.cartSubject.next(count + 1);
    const items = this.cartItemsSubject.getValue();
    this.cartItemsSubject.next([ ...items, item ]);
    console.log(this.cartSubject.getValue(),this.cartItemsSubject.getValue())
  }
  remove(id:number) {
    const count = this.cartSubject.getValue();
    this.cartSubject.next(count - 1);
    const items = this.cartItemsSubject.getValue();
    const newItems= items.filter((val)=>val.id!==id)
    this.cartItemsSubject.next([newItems]);
  }



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
