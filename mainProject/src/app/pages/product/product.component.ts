import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  id: number = 0;
  product:any={}
  constructor(private ar: ActivatedRoute,private api:ApiService) {
    this.ar.params.subscribe(d => this.id = d[ 'id' ]);
    this.api.getSingleProduct(this.id).subscribe(
      (data) => this.product = data)
  }

}
