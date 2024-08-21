import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: any = [];
  categories: any = [
    'beauty',
    'fragrances',
    'furniture',
    'groceries',
    'home-decoration',
    'kitchen-accessories',
    'laptops',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'mobile-accessories',
    'motorcycle',
    'skin-care',
    'smartphones',
    'sports-accessories',
    'sunglasses',
    'tablets',
    'tops',
    'vehicle',
    'womens-bags',
    'womens-dresses',
    'womens-jewellery',
    'womens-shoes',
    'womens-watches',
  ];
  constructor(private api: ApiService,private route:Router) {
    this.api
      .getData()
      .subscribe((data: any) => (this.products = data.products));
  }
  getCategoryProducts(e: any) {
    this.api
      .getCategoryData(e.target.value)
      .subscribe((data: any) => (this.products = data.products));
  }
  navigateTOProduct(id:any) {
    this.route.navigateByUrl(`/product/${id}`)
  }
}
