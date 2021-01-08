import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../model/ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http: HttpClient) { }
  private URL_API = 'http://localhost:3000/books';
  getAll(): Observable<any>{
    return this.http.get(this.URL_API);
  }
  delete(id: number): Observable<any>{
    return this.http.delete(this.URL_API + `/${id}`);
  }
  create(book: IBook): Observable<any>{
    return  this.http.post<IBook>(this.URL_API , book  );
  }
  getBookById(id: string): Observable<IBook> {
    return this.http.get<IBook>(this.URL_API + `/${id}`);
  }
  update(book: IBook): Observable<any>{
    return this.http.put<IBook>(this.URL_API + `/${book.id}`, book);
  }
}
