import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBooksComponent} from './book/list-books/list-books.component';
import {CreateBookComponent} from './book/create-book/create-book.component';
import {DetailBookComponent} from './book/detail-book/detail-book.component';
import {EditBookComponent} from './book/edit-book/edit-book.component';

const routes: Routes = [{
  path: '',
  component: ListBooksComponent
},
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: 'list',
    component: ListBooksComponent
  },
  {
    path: 'detail/:id',
    component: DetailBookComponent
  },
  {
    path: 'edit/:id',
    component: EditBookComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
