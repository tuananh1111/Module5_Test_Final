import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IBook} from '../../model/ibook';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  bookForm: FormGroup;
  constructor(private  service: BookService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: [null],
      author: [null],
      description: [null]
    });
  }


  create() {
    const book: IBook = this.bookForm.value;
    this.service.create(book).subscribe(value => {
      alert('Thêm mới thành công');
      this.router.navigate(['']);
    });
  }
}
