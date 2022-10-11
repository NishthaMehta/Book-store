import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [
    BrowserModule, 
    BooksModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}