import { Component, OnInit } from '@angular/core';
import {IBook} from "../ibook";
import {IBookService} from "../ibook.service";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
books: IBook[] = []
  constructor(private iBookService: IBookService) {
  this.getListBook();
  }

  ngOnInit(): void {
  }
  getListBook(): IBook[] {
  this.iBookService.getAllBook().subscribe(p => this.books = p);
  return this.books;
  }

}
