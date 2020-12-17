import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(p: Product): void {
    this.productListComponent.products.push(p);
  }

}
