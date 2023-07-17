import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book.model';
import { Library } from './models/library.model';

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
    this.http.get<Library>(url).subscribe(data => {
      this.books = data.library;
    })
  }
}
