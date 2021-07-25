import { Component, OnInit } from '@angular/core';
import { BorrowListService } from './../services/borrow-list.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.page.html',
  styleUrls: ['./borrower.page.scss'],
})
export class BorrowerPage implements OnInit {

  borrower: any = [];

  constructor( 
    public toast: ToastController,
    private borrowListService: BorrowListService,
    private router: Router
  ) { }

  async ngOnInit() { this.getAllData();
  }
  logout(){
    this.router.navigate(['/login']);
  }

  getAllData(){
    this.borrowListService.getDataFromLumen().then(data =>{
      this.borrower = data;
      // console.log(data);
    })
  }
  async removeBook(index) {
    
    const toasts = await this.toast.create({
      message: "Are you sure to delete this borrower's record?",
      position: "top",
      buttons: [
        {
          icon: "trash",
          side: 'end',
          text: "Yes",
          handler: () => {
            console.log('Deleted Successfully');
            // this.contactService.removeContact(index).then(data => {
            //   this.contacts = data;
            // })
          }
        }, {
          side: "start",
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel deletion')
          }
        }]
    })
    toasts.present();
  }

}
