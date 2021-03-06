import { Component, Input } from '@angular/core';
import { Book } from '../models/book.model';
import { MdSnackBar } from '@angular/material';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() private book: Book;

  constructor(private cartService: CartService, private mdSnackBar: MdSnackBar) { }

  add(): void {
    this.cartService.add(this.book);
    this.mdSnackBar.open('Added successfully', null, { duration: 1000 });
  }

}
