import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BookListService } from './../services/book-list.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  list: any = [];
  id: any;
  title: [''];
  author: [''];
  price: [''];
  status: [''];


  constructor(
    public toastCtrl: ToastController,
    private bookListService: BookListService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {}

  getAllData(){
    this.bookListService.getDataFromLumen().then(data =>{
      this.list = data;
      console.log(data);
    })
  }

  update(id){
    this.bookListService.updateDataFromLumen(this.id,this.title, this.author, this.price, this.status);
    this.show();
    this.router.navigate(['/list']);
    console.log('update')
  }

  show() {
    this.toastCtrl.create({
      header: 'Hurrayy!',
      message: 'Book have been edited sucessfully',
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
  back(){
    this.router.navigate(['/list']);
  }

}