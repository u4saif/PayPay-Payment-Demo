import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaymeComponent } from './payme/payme.component';
import { Pay2Component } from './pay2/pay2.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymeComponent,
    Pay2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
