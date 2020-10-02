import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {IBookService} from "../ibook.service";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  bookForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private bookService: IBookService,
              private router: Router) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl()
    });
  }
  createBook(): void {
    const product = this.bookForm.value;
    this.bookService.createBook(product).subscribe(()=>{
      this.router.navigate(['books']);
    });
  }

}
