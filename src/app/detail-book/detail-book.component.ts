import { Component, OnInit } from '@angular/core';
import {IBook} from "../ibook";
import {IBookService} from "../ibook.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
  book: IBook = null;
  constructor(private bookService: IBookService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = (+this.activeRoute.snapshot.params['id']);
    this.getBookById(id);
  }
  getBookById(id: number): void {
    this.bookService.getBookById(id).subscribe(pr => this.book = pr);
  }
}
