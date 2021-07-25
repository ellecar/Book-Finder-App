import { Component, OnInit, NgZone } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { BorrowListService } from './../services/borrow-list.service';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.page.html',
  styleUrls: ['./borrow.page.scss'],
})
export class BorrowPage implements OnInit {
  b_name: [''];
  b_title: [''];
  rented: [''];
  b_price: [''];
  b_status: [''];

  userForm: FormGroup;

  constructor(
    public toastCtrl: ToastController,
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private borrowListService: BorrowListService    
  ) {
  }

  ngOnInit() { }

  onSubmit(){
    
    this.borrowListService.insertDataFromLumen(this.b_name, this.b_title, this.rented, this.b_price, this.b_status);
    this.clearField();
    this.show();
    this.router.navigate(['/borrower']);
  }

  clearField(){
    this.b_name = [''];
    this.b_title = [''];
    this.rented = [''];
    this.b_price = [''];
    this.b_status = [''];
  }
  logout(){
    this.router.navigate(['/login']);
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
}
