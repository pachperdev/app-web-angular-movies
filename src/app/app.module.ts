import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieTopComponent } from './movies/movie-top/movie-top.component';
import { MovieMostPopularComponent } from './movies/movie-most-popular/movie-most-popular.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'


@NgModule({
  declarations: [
    AppComponent,
    MovieTopComponent,
    MovieMostPopularComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
