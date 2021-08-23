import { Injectable } from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
product: Product[] = [
  {
    id: 1,
    name: 'Iphone 12',
    price: 12000000,
    description: 'Điện Thoại cao cấp'
  },  {
    id: 2,
    name: 'Samsung note 20 ultra',
    price: 24000000,
    description: 'Điện Thoại cao cấp'
  },  {
    id: 3,
    name: 'Samsung note 10 plus',
    price: 22000000,
    description: 'Điện Thoại cao cấp'
  },  {
    id: 4,
    name: 'Iphone 12 pro max',
    price: 12000000,
    description: 'Điện Thoại cao cấp'
  },
];
  constructor() { }
  getAll() {
    return this.product;
  }
  saveProduct(product) {
    this.product.push(product);
  }
}
