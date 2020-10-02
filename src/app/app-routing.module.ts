import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBookComponent} from "./list-book/list-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DetailBookComponent} from "./detail-book/detail-book.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";

const routes: Routes = [
  {
    path: 'books',
    component: ListBookComponent
  },
  {
    path: 'edit/:id',
    component: EditBookComponent
  },
  {
    path: 'detail/:id',
    component: DetailBookComponent
  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: 'delete/:id',
    component: DeleteBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
