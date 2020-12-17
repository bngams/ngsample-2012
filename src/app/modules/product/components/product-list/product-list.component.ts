import { Component, Input, OnInit, ValueProvider, ɵpublishDefaultGlobalUtils } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../mocks/products.mock';
import { ProductService } from '../../services/product.service';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = new Array();
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  // Initialization
  ngOnInit(): void {
    // this.testObservable();
    this.loadProductsviaAPI();
  }

  loadProductsViaMock(): void {
    // via mock
    this.products = PRODUCTS;
  }

  loadProductsviaAPI(): void {
    this.productService.getProducts().subscribe(res => this.products = res);
    this.products$ = this.productService.getProducts();
  }

  testObservable(): void {
    // objet qui englobe un traaitment (async)
    // renvoi des données, grace à un subscriber
    const observable = new Observable<number>(subscriber => {
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

    const otherObservable = of(1, 2, 3);
    otherObservable.pipe(
      map(x => x * 2), // 1 * 2, 2 * 2, 3 * 2
      filter(x => x > 3) // 2 > 3 ? false, 4 > 3 ? true, 6 > 3 ? true
    ).subscribe((result) => console.log('result', result));

  }

}
