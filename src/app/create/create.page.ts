import { Component, OnInit, NgZone } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { BookListService } from './../services/book-list.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {
  title: [''];
  author: [''];
  price: [''];
  status: [''];

  userForm: FormGroup;

  constructor(
    public toastCtrl: ToastController,
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private bookListService: BookListService
 
  ) {}

  ngOnInit() {
  }

  onSubmit(){
    this.bookListService.insertDataFromLumen(this.title, this.author, this.price, this.status);
    this.clearField();
    this.show();
    this.router.navigate(['/list']);
  }

  clearField(){
    this.title = [''];
    this.author = [''];
    this.price = [''];
    this.status = [''];
  }
  logout(){
    this.router.navigate(['/login']);
  }

  show() {
    this.toastCtrl.create({
      header: 'Hurrayy!',
      message: 'Book have been added sucessfully',
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
  // async show(){
  //   const toast = await this.toastCtrl.create({
  //     message: 'Book have been added sucessfully',
  //     duration: 2000,
  //     animated: true,
  //     position: 'top',
  //     keyboardClose: true,
  //     color: 'success',
  //     cssClass: 'show'
  //   });
  //   toast.present();
  // }
}