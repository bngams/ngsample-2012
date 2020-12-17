import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Routes = Route[] (Alias)
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:param', component: HomeComponent },
  { path: ':param/home', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
  // without lazy loading
  // {
  //   path: 'stock', children: [
  //     // /stock/dashboard
  //     { path: 'dashboard', component: DashboardComponent }
  //   ]
  // },
  { path: 'stock', loadChildren: () => import('./modules/stock/stock.module').then(m => m.StockModule) },
  // old syntax
  // { path: 'product', loadChildren: './modules/product/product.module#ProductModule' }, // NgModuleFactory
  { path: 'product', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
  // at the end
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
