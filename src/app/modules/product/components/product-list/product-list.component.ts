import { Component, Input, OnInit, ValueProvider } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../mocks/products.mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = new Array();

  constructor(private http: HttpClient) { }

  // Initialization
  ngOnInit(): void {
    this.testObservable();
    this.loadProductsviaAPI();
  }

  loadProductsViaMock(): void {
    // via mock
    this.products = PRODUCTS;
  }

  loadProductsviaAPI(): void {
    let request: Observable<Product[]>;
    request = this.http.get<Product[]>('http://localhost:3304/products');
  }

  testObservable(): void {
    // objet qui englobe un traaitment (async)
    // renvoi des données, grace à un subscriber
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    // souscrire à un subscriber et traiter les notifs
    const observer = {
      next: (result) => console.log('next', result),
      error: (err) => console.log('err', err),
      complete: () => console.log('complete')
    };

    // subscribe => declenche le traitement, et branchement du observer

    // complete observer
    // observable.subscribe(observer);

    // partial observer Partial<Observer>
    // observable.subscribe({
    //   next: (result) => console.log('next', result),
    //   error: (err) => console.log('err', err)
    // });

    // arrows functions
    observable.subscribe(
      (result) => console.log('next', result),
      (err) => console.log('err', err)
    );

  }

}
