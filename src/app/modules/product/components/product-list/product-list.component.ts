import { Component, OnInit, ValueProvider } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../mocks/products.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = new Array();

  constructor() { }

  // Initialization
  ngOnInit(): void {
    this.loadProductsViaMock();
  }

  loadProductsViaMock(): void {
    // via mock
    this.products = PRODUCTS;
  }

}
