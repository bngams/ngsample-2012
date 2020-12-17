import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from './theme.module';



@NgModule({
  exports: [
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
