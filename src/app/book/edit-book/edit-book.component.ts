import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IBook} from '../../model/ibook';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book: IBook;
  id: number;
  bookForm: FormGroup;
  constructor(private router: Router,
              private service: BookService,
              private fb: FormBuilder,
              private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: '',
      author: '',
      description: ''
    });
      this.activated.paramMap.subscribe((paramMap: ParamMap) => {
        this.id =  paramMap.get('id');
        this.service.getBookById(this.id).subscribe(value => {
          this.book = value;
          this.bookForm.patchValue(this.book);
        });
      });
  }

  editBook() {
    if (!this.bookForm.invalid){
      this.book.title = this.bookForm.value.title;
      this.book.author = this.bookForm.value.author;
      this.book.description = this.bookForm.value.description;
      this.service.update(this.book).subscribe(value => {
        alert('Cập nhật thành công');
        console.log(value);
        }
      );
      this.router.navigate(['list']);
      this.service.getAll();

    }
  }
}
