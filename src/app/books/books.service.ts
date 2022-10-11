import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/products';
 
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  listAllProduct():Observable<any>{
    return this.http.get(baseUrl);
  }

  
}
