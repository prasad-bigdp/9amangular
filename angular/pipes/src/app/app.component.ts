import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pipes';
  name = 'prasad';
  name2 = 'JESSI';
  dt = new Date();
  obj = {
    name: 'raj',
    age: 20,
  };
  price = 250;
  name3="John cena"
  data:any=''
  constructor(private hc: HttpClient) {
   this.data= this.hc.get('https://api.quotable.io/random');
  }
}
