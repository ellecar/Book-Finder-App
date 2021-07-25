import { Component, OnInit } from '@angular/core';
import { BookListService } from './../services/book-list.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {

  list: any = [];
  id: any;
  title: [''];
  author: [''];
  price: [''];
  status: [''];

  constructor( 
    public toast: ToastController,
    private activatedRoute: ActivatedRoute,
    private bookListService: BookListService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    this.getAllData();
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
  // removeBook(id){
  //   if (window.confirm('Are you sure')) {
  //   this.bookListService.deleteDataFromLumen(id).subscribe((res:any) => {
  //         console.log('Deleted');
  //   })

  // }
  // }
  async removeBook(id) {
    
    const toasts = await this.toast.create({
      message: 'Are you sure to delete this book?',
      position: "top",
      buttons: [
        {
          icon: "trash",
          side: 'end',
          text: "Yes",
          handler: () => {
            // console.log('Deleted Successfully');
            this.bookListService.deleteDataFromLumen(this.id);
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




  // ionViewDidEnter() {
  //   this.userCrudService.getUsers().subscribe((response) => {
  //     this.Users = response;
  //   })
  // }


  // removeUser(list, i) {
  //   if (window.confirm('Are you sure')) {
  //     this.bookListService.deleteUser(list.id)
  //     .subscribe(() => {
  //         this.getAllData();
  //         console.log('User deleted!')
  //       }
  //     )
  //   }
  // }


}