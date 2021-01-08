import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListBooksComponent } from './book/list-books/list-books.component';
import { CreateBookComponent } from './book/create-book/create-book.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { DetailBookComponent } from './book/detail-book/detail-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    CreateBookComponent,
    EditBookComponent,
    DetailBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
