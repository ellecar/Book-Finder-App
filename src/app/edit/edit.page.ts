import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BookListService } from './../services/book-list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  updateUserFg: FormGroup;
  id: any;

  constructor(
    private BookListService: BookListService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  //   this.fetchUser(this.id);
  //   this.updateUserFg = this.formBuilder.group({
  //     b_name: [''],
  //     book: [''],
  //     rented:[''],
  //     date: [''],
  //     b_status: ['']
  //   })
  // }

  // fetchUser(id) {
  //   this.BookListService.getUser(id).subscribe((data) => {
  //     this.updateUserFg.setValue({
  //       b_name: data['b_name'],
  //       book: data['book'],
  //       rented: data['rented'],
  //       date: data['date'],
  //       b_status: data['b_status'] 
  //     });
  //   });
  // }

  // onSubmit() {
  //   if (!this.updateUserFg.valid) {
  //     return false;
  //   } else {
  //     this.BookListService.updateUser(this.id, this.updateUserFg.value)
  //       .subscribe(() => {
  //         this.updateUserFg.reset();
  //         this.router.navigate(['/borrower']);
  //       })
  //   }
  }

}
