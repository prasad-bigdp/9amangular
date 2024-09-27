import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  count = 0; items: any[] = []; total = 0;
  constructor(private api: ApiService) {
    this.api.countObs.subscribe((data) => this.count = data);
    this.api.itemsObs.subscribe((data) => {
      this.items = data;
      this.total=this.items.reduce((prev,i)=>prev+i.price,0)
    })
  }

}
