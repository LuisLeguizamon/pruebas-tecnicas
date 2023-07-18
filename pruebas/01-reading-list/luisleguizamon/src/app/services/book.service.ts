import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Library } from '../models/library.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks() {
    const url = 'assets/books.json';
    return this.http.get<Library>(url);
  }
}
