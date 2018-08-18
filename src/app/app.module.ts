import { SafePipe } from './safepipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { DeputadosComponent } from './deputados/deputados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeputadosComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
