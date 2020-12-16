import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header.component';
import { GetStartedComponent } from './components/get-started/get-started.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetStartedComponent
    // MyCustomPipe,
    // MyCustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
