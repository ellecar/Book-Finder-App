import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Router,ActivatedRoute} from "@angular/router";
import { BorrowListService} from './../services/borrow-list.service';

@Component({
  selector: 'app-update-borrower',
  templateUrl: './update-borrower.page.html',
  styleUrls: ['./update-borrower.page.scss'],
})
export class UpdateBorrowerPage implements OnInit {
  borrower: any = [];
  id: any;
  b_name: [''];
  b_title: [''];
  rented: [''];
  b_price: [''];
  b_status: [''];
  

  constructor(
    public toastCtrl: ToastController,
    private activatedRoute: ActivatedRoute,
    private borrowListService: BorrowListService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }
  getAllData(){
    this.borrowListService.getDataFromLumen().then(data =>{
      this.borrower = data;
      console.log(data);
    })
  }

  update(id){
    this.borrowListService.updateDataFromLumen(this.id, this.b_status);
    this.show();
    this.router.navigate(['/borrower'])
    .then(() => {
      window.location.reload();
    });
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
    this.router.navigate(['/borrower']);
  }
}
