import { Injectable } from "@angular/core";
import { Book } from "../types/Book";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl = 'http://localhost:8080/api/cart';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    // cart: Array<Book> = [];
  constructor(private http:HttpClient) { }

    listAllCart():Observable<any>{
        return this.http.get(baseUrl);
      }
}