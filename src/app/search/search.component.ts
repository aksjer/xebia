import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  private searchTerm: string;
  private searchTermSubscription: Subscription;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.searchTermSubscription = this.bookService.lastSearchTerm$.subscribe((term: string) => this.searchTerm = term);
  }

  ngOnDestroy(): void {
    if (this.searchTermSubscription) {
      this.searchTermSubscription.unsubscribe();
    }
  }

  search(): void {
    this.bookService.searchTerm$.next(this.searchTerm);
  }

}
