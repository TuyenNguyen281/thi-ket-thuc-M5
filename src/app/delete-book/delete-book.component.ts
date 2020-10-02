import {Component, OnInit} from '@angular/core';
import {IBook} from "../ibook";
import {IBookService} from "../ibook.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  book: IBook = null;

  constructor(private bookService: IBookService,
              private activeRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    let id = (+this.activeRoute.snapshot.params['id']);
    this.getBookById(id);
  }

  getBookById(id: number): void {
    this.bookService.getBookById(id).subscribe(pr => this.book = pr);
  }

  deleteBook(): void {
    this.bookService.deleteBook(this.book.id).subscribe(() => {
      this.router.navigate(['books']);
    });
    alert('Delete Book success fully! : ' + this.book.author)
  }
}
