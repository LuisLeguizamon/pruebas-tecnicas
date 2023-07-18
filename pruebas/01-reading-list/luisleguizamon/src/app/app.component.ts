import { Component } from '@angular/core';
import { Book } from './models/book.model';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books: Book[] = [];

  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      let library = data.library;
      this.books = library.map((item) => {
        return item.book;
      });
    });
  }
}
