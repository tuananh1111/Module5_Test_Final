import { Component, OnInit } from '@angular/core';
import {IBook} from '../../model/ibook';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
  id: number;
  book: IBook;
  constructor(private activated: ActivatedRoute, private service: BookService) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.detailBook(this.id);
    });
  }
  detailBook(id: number): IBook{
    this.service.getBookById(id).subscribe(value => {
      this.book = value;
    });
  }

}
