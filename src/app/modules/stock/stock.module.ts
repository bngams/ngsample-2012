import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [DashboardComponent, DetailsComponent],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
