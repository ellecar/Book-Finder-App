import { Component, OnInit } from '@angular/core';
import { BorrowListService } from './../services/borrow-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-borrower',
  templateUrl: './user-borrower.page.html',
  styleUrls: ['./user-borrower.page.scss'],
})
export class UserBorrowerPage implements OnInit {
  borrower: any = [];

  constructor(
    private borrowListService: BorrowListService,
    private router: Router
  ) { }

  async ngOnInit() { this.getAllData();
  }
  logout(){
    this.router.navigate(['/login']);
  }
  back(){
    this.router.navigate(['/home']);
  }

  getAllData(){
    this.borrowListService.getDataFromLumen().then(data =>{
      this.borrower = data;
      // console.log(data);
    })
  }

}
