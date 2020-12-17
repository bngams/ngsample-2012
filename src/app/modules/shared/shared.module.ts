import { NgModule } from '@angular/core';
import { ThemeModule } from './theme.module';



@NgModule({
  exports: [
    ThemeModule,
  ]
})
export class SharedModule { }
