import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book.model';
import { CartService } from '../cart.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  constructor(private cartService: CartService, private snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.add(this.book).subscribe(success => {
      if (success) {
        this.snackBar.open('Added successfully', null, { duration: 1000 });
      }
    })
  }

}