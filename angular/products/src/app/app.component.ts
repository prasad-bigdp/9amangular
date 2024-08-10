import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  prod:any=[]
  constructor(private hc: HttpClient) {
    this.hc.get('https://fakestoreapi.com/products')
      .subscribe((data) => this.prod=data)
   }
}
