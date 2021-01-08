import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {IBook} from '../../model/ibook';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {
  listBook: IBook[];
  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.getAllBook();
  }
  getAllBook(): IBook[]{
    this.service.getAll().subscribe(value => {
      this.listBook = value;
    });
    // @ts-ignore
    return this.listBook;
  }

  delete(id) {
    if (confirm('Bạn có chắc muốn xóa không?')){
      this.service.delete(id).subscribe(value => {
        console.log(value);
        this.getAllBook();
      });
    }
  }
}
