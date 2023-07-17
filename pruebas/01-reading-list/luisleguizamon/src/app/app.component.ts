import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Books {
  library: any[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books: any[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const url = 'assets/books.json';
    this.http.get<Books>(url).subscribe(data => {
      this.books = data.library;
    })
  }
}
