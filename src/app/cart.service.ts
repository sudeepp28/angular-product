import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
    window.alert('your itemis added to cart');
  }
  getitems() {
    return this.items;
  }
  clearitems() {
    this.items = [];
    return this.items;
  }
  constructor(private http: HttpClient) {}
}
