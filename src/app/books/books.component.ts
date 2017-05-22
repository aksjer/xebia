import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Observable } from 'rxjs/observable';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  baseBooks: Book[];
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.get().subscribe(books => {
      this.baseBooks = books;
      this.books = books;
    });
  }

  searchTerm(term: string) {
    this.books = this.baseBooks.filter(s => s.title.toLowerCase().includes(term.toLowerCase()));
  }

}