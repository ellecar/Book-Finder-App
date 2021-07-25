import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BorrowListService } from './../services/borrow-list.service';

@Component({
  selector: 'app-user-borrow',
  templateUrl: './user-borrow.page.html',
  styleUrls: ['./user-borrow.page.scss'],
})
export class UserBorrowPage implements OnInit {
  b_name: [''];
  b_title: [''];
  rented: [''];
  b_price: [''];
  b_status: [''];
  
  constructor(
    public toastCtrl: ToastController,
    private router: Router,
    private borrowListService: BorrowListService
  ) { }

  ngOnInit() {
  }
  onSubmit(){
    this.borrowListService.insertDataFromLumen(this.b_name, this.b_title, this.rented, this.b_price, this.b_status);
    this.clearField();
    this.show();
    this.router.navigate(['/user-borrower']);
  }
  clearField(){
    this.b_name = [''];
    this.b_title = [''];
    this.rented = [''];
    this.b_price = [''];
    this.b_status = [''];
  }
  show() {
    this.toastCtrl.create({
      header: 'Hurrayy!',
      message: 'Book have been rented sucessfully',
      position: 'top',
      duration: 2500,
      animated: true,
      color: 'success',
      buttons: [{
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          }
        }
      ]
    }).then((obj) => {
      obj.present();
    });
  }
  login(){
    this.router.navigate(['/home']);
  }
}
