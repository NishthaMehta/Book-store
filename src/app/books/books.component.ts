import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private booksService: BooksService) { }

  isShowing: boolean = true;

  readData:any;

  ngOnInit(): void {
    this.booksService.listAllProduct().subscribe((res)=>{
      console.log(res);
      this.readData=res
    })
  }

}
