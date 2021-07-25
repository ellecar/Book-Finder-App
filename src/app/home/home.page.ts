import { Component, OnInit } from '@angular/core';
import { BookListService } from './../services/book-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  list: any = [];
  
  constructor(
    private bookListService: BookListService,
    private router: Router) 
    {}
    async ngOnInit() {
      this.getAllData();
    }
    add(){
      this.router.navigate(['/user-borrow']);
    }
    logout(){
      this.router.navigate(['/login']);
    }
  
    getAllData(){
      this.bookListService.getDataFromLumen().then(data =>{
        this.list = data;
        // console.log(data);
      })
    }
}
