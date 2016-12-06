import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoLibModule  } from 'angular2-webpack-lib';

@NgModule({
  imports: [
    BrowserModule,
    DemoLibModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
