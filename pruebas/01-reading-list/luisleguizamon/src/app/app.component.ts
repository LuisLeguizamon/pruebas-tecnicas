import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book.model';

interface Books {
  library: {
    book: Book
  }[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books: { book: Book }[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const url = 'assets/books.json';
    this.http.get<Books>(url).subscribe(data => {
      this.books = data.library;
    })
  }
}
